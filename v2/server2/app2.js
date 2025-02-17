require('dotenv').config(); // Подключение переменных окружения
const express = require('express');
const cors = require('cors');
const errorHandler = require('./src/utils/errorHandler');
const productRoutes = require('./src/routes/products');
const userRoutes = require('./src/routes/users');
const orderRoutes = require('./src/routes/orders');
const rateLimit = require('express-rate-limit');


const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 100, // Лимит запросов
    message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);



// Middleware
app.use(cors()); // Разрешение CORS
app.use(express.json()); // Парсинг JSON в запросах

// Маршруты
app.use('/api/products', productRoutes); // Маршруты для продуктов
app.use('/api/users', userRoutes);       // Маршруты для пользователей
app.use('/api/orders', orderRoutes);     // Маршруты для заказов

// Health-check route (для проверки работоспособности сервера)
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});

// Обработчик ошибок
app.use(errorHandler);

module.exports = app; // Экспортируем приложение
