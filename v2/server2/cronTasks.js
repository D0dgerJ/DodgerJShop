const cron = require('node-cron');
const pool = require('./db'); // Подключение к базе данных

// Функция для обновления рейтинга и количества отзывов
const updateRatingsAndReviews = async () => {
    try {
        await pool.query(`
            UPDATE products p
            SET avg_rating = subquery.avg_rating,
                review_count = subquery.review_count
            FROM (
                SELECT 
                    product_id, 
                    COALESCE(AVG(rating), 0) AS avg_rating, 
                    COUNT(comment_id) AS review_count
                FROM comments
                GROUP BY product_id
            ) AS subquery
            WHERE p.product_id = subquery.product_id;
        `);

        console.log('Ratings and reviews updated successfully');
    } catch (error) {
        console.error('Error updating ratings and reviews:', error);
    }
};

// Настройка cron job для выполнения каждые 5 минут (или по вашему выбору)
cron.schedule('*/5 * * * *', () => {
    console.log('Running updateRatingsAndReviews task...');
    updateRatingsAndReviews();
});


// Обновление акций каждые 1 минуту
cron.schedule('*/1 * * * *', async () => {
    console.log('Updating promotions...');
    try {
        await pool.query(`
            -- Деактивируем все акции, у которых закончился срок действия
            UPDATE promotions
            SET is_active = false
            WHERE end_date < NOW();

            -- Активируем случайные акции для 10 продуктов
            UPDATE promotions
            SET is_active = true
            WHERE product_id IN (
                SELECT product_id FROM products
                ORDER BY RANDOM()
                LIMIT 10
            ) AND start_date <= NOW() AND end_date >= NOW();
        `);
        console.log('Promotions updated.');
    } catch (error) {
        console.error('Error updating promotions:', error);
    }
});
  