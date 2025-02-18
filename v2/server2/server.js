const app = require('./app'); // Импортируем приложение
const logger = require('./utils/logger'); // Логгер для отслеживания событий

const PORT = process.env.PORT || 5000; // Порт для запуска сервера

// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
    logger.info(`Server is running on port ${PORT}`);
});
