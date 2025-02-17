const { createLogger, format, transports } = require('winston');

// Настройка логгера
const logger = createLogger({
    level: 'info', // Уровень логирования (info, error, warn, debug)
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Добавляем временную метку
        format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`) // Формат вывода
    ),
    transports: [
        new transports.Console(), // Логирование в консоль
        new transports.File({ filename: 'logs/error.log', level: 'error' }), // Логирование ошибок в файл
        new transports.File({ filename: 'logs/combined.log' }) // Логирование всех событий в файл
    ],
});

module.exports = logger;
