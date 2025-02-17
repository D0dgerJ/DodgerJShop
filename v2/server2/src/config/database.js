const { Pool } = require('pg');

// Настройки соединения с базой данных
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',         // Имя пользователя базы данных
    host: process.env.DB_HOST || 'localhost',       // Хост базы данных
    database: process.env.DB_NAME || 'mydatabase',  // Имя базы данных
    password: process.env.DB_PASSWORD || 'password',// Пароль
    port: process.env.DB_PORT || 5432,              // Порт базы данных
});

// Логирование успешного соединения
pool.on('connect', () => {
    console.log('Successfully connected to the database');
});

// Логирование ошибок соединения
pool.on('error', (err) => {
    console.error('Unexpected error on idle database client:', err);
    process.exit(-1); // Завершаем процесс при ошибке
});

module.exports = pool;
