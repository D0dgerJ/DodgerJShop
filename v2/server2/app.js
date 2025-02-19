require('dotenv').config({ path: __dirname + '/.env' });

console.log("🔹 JWT_SECRET загружен:", process.env.JWT_SECRET);

if (!process.env.JWT_SECRET) {
    console.error("❌ Ошибка: JWT_SECRET не загружен! Проверь `.env` файл.");
    process.exit(1);
}
require('./cronTasks');

const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Подключаем папку public для раздачи статических файлов
app.use('/images', express.static('public/images'));
app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.setHeader("Surrogate-Control", "no-store");
    next();
});



const jwtSecret = process.env.JWT_SECRET;

// Register route
app.post('/api/register', async (req, res) => {
    const { login, email, password, name, date_of_birth, surname, gender, phone_number } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query(
            `INSERT INTO customers (login, email, password, name, date_of_birth, surname, gender, phone_number) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [login, email, hashedPassword, name, date_of_birth, surname, gender, phone_number]
        );
        res.status(201).send('User registered');
    } catch (error) {
        console.error('Error registering user', error);
        res.status(500).send('Internal Server Error');
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM customers WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return res.status(400).send('User not found');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send('Invalid password');
        }

        const token = jwt.sign({ id: user.customer_id, login: user.login, email: user.email }, jwtSecret);
        res.json({ token });
    } catch (err) {
        console.error('Error logging in user', err);
        res.status(500).send('Error logging in user');
    }
});

// Authentication check route
app.get('/api/auth-check', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ isAuthenticated: false });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, jwtSecret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ isAuthenticated: false });
        }

        try {
            // Получаем данные пользователя из базы данных
            const result = await pool.query('SELECT * FROM customers WHERE customer_id = $1', [decoded.id]);
            const user = result.rows[0];

            if (!user) {
                return res.status(404).json({ isAuthenticated: false });
            }

            res.json({
                isAuthenticated: true,
                user: {
                    customer_id: user.customer_id,
                    login: user.login,
                    email: user.email,
                },
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
            res.status(500).json({ isAuthenticated: false });
        }
    });
});


// Profile route - GET
app.get('/api/profile', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, jwtSecret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        try {
            const result = await pool.query('SELECT * FROM customers WHERE customer_id = $1', [decoded.id]);
            if (result.rows.length === 0) {
                res.status(404).json({ error: 'Profile not found' });
            } else {
                res.json(result.rows[0]);
            }
        } catch (error) {
            console.error('Error fetching profile data', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// Profile route - PUT
app.put('/api/profile', async (req, res) => {
    const { profileData } = req.body;
    if (!profileData) {
        return res.status(400).json({ error: 'No profile data provided' });
    }
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, jwtSecret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        try {
            const fields = ['name', 'date_of_birth', 'surname', 'gender', 'phone_number', 'email', 'login', 'password'];
            const updates = [];

            for (const [key, value] of Object.entries(profileData)) {
                if (fields.includes(key)) {
                    let updateValue = value;
                    if (key === 'password') {
                        updateValue = await bcrypt.hash(value, 10);
                    }
                    updates.push(pool.query(`UPDATE customers SET ${key} = $1 WHERE customer_id = $2`, [updateValue, decoded.id]));
                }
            }

            await Promise.all(updates);

            const result = await pool.query('SELECT * FROM customers WHERE customer_id = $1', [decoded.id]);
            res.json(result.rows[0]);
        } catch (error) {
            console.error('Error updating profile data', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// Products routes
app.get('/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/product_images', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM product_images');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/products/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
        const result = await pool.query('SELECT * FROM products WHERE product_id = $1', [productId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/product_images/:imageId', async (req, res) => {
    const imageId = req.params.imageId;
    try {
        const result = await pool.query('SELECT * FROM product_images WHERE product_id = $1', [imageId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Images not found for the specified product' });
        } else {
            res.json(result.rows);
        }
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/products_with_images', async (req, res) => {
    try {
        const query = `
            SELECT 
                p.*, 
                pi.image_url
            FROM 
                products p
            LEFT JOIN 
                product_images pi
            ON 
                p.product_id = pi.product_id;
        `;

        const result = await pool.query(query);

        // Группируем данные по продуктам, чтобы у каждого продукта был массив изображений
        const productsWithImages = result.rows.reduce((acc, row) => {
            const productId = row.product_id;

            if (!acc[productId]) {
                acc[productId] = {
                    product_id: row.product_id,
                    name: row.name,
                    price: row.price,
                    description: row.description,
                    category_id: row.category_id,
                    brand: row.brand,
                    gender: row.gender,
                    material: row.material,
                    discount_id: row.discount_id,
                    avg_rating: row.avg_rating,
                    review_count: row.review_count,
                    stock_quantity: row.stock_quantity,
                    images: [],
                };
            }

            // Добавляем URL изображения, если он есть
            if (row.image_url) {
                acc[productId].images.push(row.image_url);
            }

            return acc;
        }, {});

        res.json(Object.values(productsWithImages)); // Преобразуем объект обратно в массив
    } catch (error) {
        console.error('Error fetching products with images:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/categories', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM categories');
        const categoriesWithCount = await Promise.all(result.rows.map(async (category) => {
            const productCount = await pool.query('SELECT COUNT(*) FROM products WHERE category_id = $1', [category.category_id]);
            return { ...category, count: productCount.rows[0].count };
        }));
        res.json(categoriesWithCount);
    } catch (error) {
        console.error('Error fetching categories with count', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/discounts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM discounts');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/discounts/:discountId', async (req, res) => {
    const discountId = req.params.discountId;
    try {
        const result = await pool.query('SELECT * FROM discounts WHERE discount_id = $1', [discountId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Discount not found' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/search', async (req, res) => {
    const { searchQuery } = req.body;
    if (!searchQuery) {
        return res.status(400).json({ error: 'Search query is required' });
    }
    try {
        const query = {
            text: 'SELECT * FROM products WHERE name ILIKE $1',
            values: [`%${searchQuery}%`],
        };
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.error('Error searching products', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});

// cardinfo
app.post('/api/cards', async (req, res) => {
    const { customer_id, card_number, card_holder, expiry_date, cvc } = req.body;

    console.log('Полученные данные на сервере:', req.body); // Логирование данных на сервере

    if (!customer_id || !card_number || !card_holder || !expiry_date || !cvc) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Проверка на существование карты с таким же номером
        const duplicateCheck = await pool.query('SELECT 1 FROM cards WHERE card_number = $1', [card_number]);
        if (duplicateCheck.rows.length > 0) {
            return res.status(400).json({ error: 'Card number already exists' });
        }

        const query = `
            INSERT INTO cards (customer_id, card_number, card_holder, expiry_date, cvc) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [customer_id, card_number, card_holder, expiry_date, cvc];
        const result = await pool.query(query, values);

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error saving card data', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Проверка на дубликат номера карты
app.post('/api/cards/check-duplicate', async (req, res) => {
    const { card_number } = req.body;

    try {
        const result = await pool.query('SELECT 1 FROM cards WHERE card_number = $1', [card_number]);

        if (result.rows.length > 0) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    } catch (error) {
        console.error('Error checking card number:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Обновление данных карты
app.put('/api/cards/:cardId', async (req, res) => {
    const { cardId } = req.params;
    const { card_number, card_holder, expiry_date, cvc } = req.body;

    try {
        // Проверка на дубликат номера карты, исключая текущую карту
        const duplicateCheck = await pool.query('SELECT 1 FROM cards WHERE card_number = $1 AND card_id != $2', [card_number, cardId]);
        if (duplicateCheck.rows.length > 0) {
            return res.status(400).json({ error: 'Card number already exists' });
        }

        const query = `
            UPDATE cards 
            SET card_number = $1, card_holder = $2, expiry_date = $3, cvc = $4
            WHERE card_id = $5
            RETURNING *`;
        const values = [card_number, card_holder, expiry_date, cvc, cardId];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Card not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating card data', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Удаление карты
app.delete('/api/cards/:cardId', async (req, res) => {
    const { cardId } = req.params;

    try {
        const query = `DELETE FROM cards WHERE card_id = $1 RETURNING *`;
        const result = await pool.query(query, [cardId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Card not found' });
        }

        res.json({ message: 'Card deleted successfully' });
    } catch (error) {
        console.error('Error deleting card', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Получение всех карт для пользователя
app.get('/api/cards', async (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, jwtSecret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        try {
            const result = await pool.query('SELECT * FROM cards WHERE customer_id = $1', [decoded.id]);
            res.json(result.rows);
        } catch (error) {
            console.error('Error fetching cards:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// Добавление нового комментария
app.post('/api/comments', async (req, res) => {
    const { product_id, customer_id, comment_text, rating } = req.body;

    if (!product_id || !customer_id || !comment_text || !rating) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO comments (product_id, customer_id, comment_text, rating) VALUES ($1, $2, $3, $4) RETURNING *',
            [product_id, customer_id, comment_text, rating]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding comment', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Получение комментариев для конкретного продукта
app.get('/api/comments/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const result = await pool.query(
            'SELECT comments.*, customers.login AS customer_login FROM comments JOIN customers ON comments.customer_id = customers.customer_id WHERE product_id = $1 ORDER BY created_at DESC',
            [productId]
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching comments', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Получение всех комментариев с картинкой и название продукта для конкретного пользователя
app.get('/api/user-comments', async (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, jwtSecret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        try {
            const result = await pool.query(
                `SELECT comments.*, 
                        products.name AS product_name, 
                        product_images.image_url 
                 FROM comments 
                 JOIN products ON comments.product_id = products.product_id 
                 LEFT JOIN product_images ON products.product_id = product_images.product_id 
                 WHERE comments.customer_id = $1 
                 ORDER BY comments.created_at DESC`,
                [decoded.id]
            );
            res.json(result.rows);
        } catch (error) {
            console.error('Error fetching user comments:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// среднего рейтинга
app.get('/products', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
                p.*, 
                COALESCE(AVG(c.rating), 0) AS avg_rating, 
                COUNT(c.comment_id) AS review_count
            FROM products p
            LEFT JOIN comments c ON p.product_id = c.product_id
            GROUP BY p.product_id
        `);
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
    }
});

// Получение всех акционных продуктов с рейтингами и отзывами
app.get('/api/featured-products', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT p.*, 
                   pr.discount_percentage, 
                   pr.start_date, 
                   pr.end_date, 
                   COALESCE(AVG(c.rating), 0) AS avg_rating, 
                   COUNT(c.comment_id) AS review_count 
            FROM products p
            JOIN promotions pr ON p.product_id = pr.product_id
            LEFT JOIN comments c ON p.product_id = c.product_id
            WHERE pr.is_active = true 
              AND pr.start_date <= NOW() 
              AND pr.end_date >= NOW()
            GROUP BY p.product_id, pr.discount_percentage, pr.start_date, pr.end_date
        `);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching featured products:', error);
        res.status(500).send('Internal Server Error');
    }
});


// Добавление новой акции
app.post('/api/promotions', async (req, res) => {
    const { product_id, discount_percentage, start_date, end_date } = req.body;

    // Валидация данных
    if (!product_id || !discount_percentage || !start_date || !end_date) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    if (new Date(start_date) >= new Date(end_date)) {
        return res.status(400).json({ error: 'Start date must be before end date.' });
    }

    if (discount_percentage < 0 || discount_percentage > 100) {
        return res.status(400).json({ error: 'Discount percentage must be between 0 and 100.' });
    }

    try {
        // Проверяем, существует ли продукт с данным product_id
        const productResult = await pool.query('SELECT * FROM products WHERE product_id = $1', [product_id]);
        if (productResult.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const result = await pool.query(`
            INSERT INTO promotions (product_id, discount_percentage, start_date, end_date)
            VALUES ($1, $2, $3, $4) RETURNING *`,
            [product_id, discount_percentage, start_date, end_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding promotion:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.get('/api/featured-promotions', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT p.*, pr.start_date, pr.end_date, pr.discount_percentage
            FROM products p
            JOIN promotions pr ON p.product_id = pr.product_id
            WHERE pr.is_active = true
            AND pr.start_date <= NOW()
            AND pr.end_date >= NOW()
        `);
        res.json(result.rows); // Возвращаем все активные акции
    } catch (error) {
        console.error(`Error fetching featured promotions: ${error.message}`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/offers/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
      const result = await pool.query(`
        SELECT p.*, pr.discount_percentage, pr.start_date, pr.end_date
        FROM products p
        JOIN promotions pr ON p.product_id = pr.product_id
        WHERE pr.is_active = true AND p.product_id = $1;
      `, [productId]);
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Offer not found' });
      }
  
      res.json(result.rows[0]);
    } catch (error) {
      console.error('Error fetching offer:', error);
      res.status(500).send('Internal Server Error');
    }
});

app.post('/api/viewed-products', async (req, res) => {
    const { product_id } = req.body;
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        const customer_id = decoded.id;

        try {
            // Проверяем, есть ли уже запись для данного товара
            const exists = await pool.query(
                'SELECT 1 FROM viewed_products WHERE customer_id = $1 AND product_id = $2',
                [customer_id, product_id]
            );

            if (exists.rows.length === 0) {
                // Добавляем запись, если её ещё нет
                await pool.query(
                    'INSERT INTO viewed_products (customer_id, product_id) VALUES ($1, $2)',
                    [customer_id, product_id]
                );
            }

            res.status(200).json({ message: 'Product added to viewed list' });
        } catch (error) {
            console.error('Error adding viewed product:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

app.get('/api/viewed-products', async (req, res) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        const customer_id = decoded.id;

        try {
            const result = await pool.query(`
                SELECT 
                    vp.product_id,
                    p.name AS product_name,
                    pi.image_url AS product_image
                FROM viewed_products vp
                JOIN products p ON vp.product_id = p.product_id
                LEFT JOIN product_images pi ON p.product_id = pi.product_id
                WHERE vp.customer_id = $1
                ORDER BY vp.created_at DESC
                LIMIT 10
            `, [customer_id]);

            res.json(result.rows);
        } catch (error) {
            console.error('Error fetching viewed products:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// Добавить продукт в избранное
app.post('/api/wishlist', async (req, res) => {
    const { product_id } = req.body;
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1];
  
    jwt.verify(token, jwtSecret, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Forbidden' });
      }
  
      try {
        // Проверяем, есть ли продукт в списке избранного
        const checkQuery = `
          SELECT 1 FROM wish_list WHERE customer_id = $1 AND product_id = $2
        `;
        const checkResult = await pool.query(checkQuery, [decoded.id, product_id]);
  
        if (checkResult.rows.length > 0) {
          return res.status(400).json({ error: 'Product is already in the wishlist' });
        }
  
        // Добавляем продукт в избранное
        const query = `
          INSERT INTO wish_list (customer_id, product_id) VALUES ($1, $2)
        `;
        await pool.query(query, [decoded.id, product_id]);
  
        res.status(201).json({ message: 'Product added to wishlist' });
      } catch (error) {
        console.error('Error adding product to wishlist', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  });
  
 // Получить список избранного
    app.get('/api/wishlist', async (req, res) => {
        const authHeader = req.headers['authorization'];

        // 🔹 Если нет токена, возвращаем пустой массив
        if (!authHeader) {
            return res.json([]); 
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, jwtSecret);

            const query = `
                SELECT p.product_id, p.name AS product_name, 
                        COALESCE(p.price, 0) AS price, 
                        p.avg_rating, p.review_count, 
                        MIN(pi.image_url) AS product_image
                FROM wish_list wl
                JOIN products p ON wl.product_id = p.product_id
                LEFT JOIN product_images pi ON p.product_id = pi.product_id
                WHERE wl.customer_id = $1
                GROUP BY p.product_id
            `;

            const result = await pool.query(query, [decoded.id]);
            res.json(result.rows);
        } catch (error) {
            console.error('Ошибка при обработке JWT:', error);
            return res.json([]);  // 🔹 Если JWT недействителен — просто вернуть пустой массив
        }
    });
  
  // Удалить продукт из избранного
  app.delete('/api/wishlist/:product_id', async (req, res) => {
    const { product_id } = req.params;
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1];
  
    jwt.verify(token, jwtSecret, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Forbidden' });
      }
  
      try {
        const query = `
          DELETE FROM wish_list WHERE customer_id = $1 AND product_id = $2
        `;
        await pool.query(query, [decoded.id, product_id]);
  
        res.json({ message: 'Product removed from wishlist' });
      } catch (error) {
        console.error('Error removing product from wishlist', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  });
  