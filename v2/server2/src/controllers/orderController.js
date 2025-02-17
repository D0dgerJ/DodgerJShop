const db = require('../db'); // Подключение к базе данных

// Создать новый заказ
exports.createOrder = async (req, res) => {
    const { items, total } = req.body;
    const userId = req.user.id;
    try {
        const result = await db.query(
            'INSERT INTO orders (user_id, items, total) VALUES ($1, $2, $3) RETURNING *',
            [userId, items, total]
        );
        res.status(201).json({ message: 'Order created', order: result.rows[0] });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
};

// Получить список всех заказов пользователя
exports.getOrdersByUser = async (req, res) => {
    const userId = req.user.id;
    try {
        const result = await db.query('SELECT * FROM orders WHERE user_id = $1', [userId]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching user orders:', error);
        res.status(500).json({ error: 'Failed to fetch user orders' });
    }
};

// Получить детали конкретного заказа по ID
exports.getOrderById = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    try {
        const result = await db.query('SELECT * FROM orders WHERE id = $1 AND user_id = $2', [id, userId]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching order by ID:', error);
        res.status(500).json({ error: 'Failed to fetch order' });
    }
};

// Отменить заказ
exports.cancelOrder = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    try {
        const result = await db.query('DELETE FROM orders WHERE id = $1 AND user_id = $2 RETURNING *', [id, userId]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json({ message: 'Order canceled', order: result.rows[0] });
    } catch (error) {
        console.error('Error canceling order:', error);
        res.status(500).json({ error: 'Failed to cancel order' });
    }
};
