const pool = require('../config/database');

// Создать нового пользователя
exports.createUser = async (data) => {
    const { login, email, password } = data;
    const query = `
        INSERT INTO customers (login, email, password)
        VALUES ($1, $2, $3)
        RETURNING *
    `;
    const { rows } = await pool.query(query, [login, email, password]);
    return rows[0];
};

// Получить пользователя по ID
exports.getUserById = async (id) => {
    const query = 'SELECT * FROM customers WHERE customer_id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

// Получить пользователя по Email
exports.getUserByEmail = async (email) => {
    const query = 'SELECT * FROM customers WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    return rows[0];
};

// Обновить пользователя
exports.updateUser = async (id, data) => {
    const fields = Object.keys(data).map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = [id, ...Object.values(data)];

    const query = `
        UPDATE customers
        SET ${fields}
        WHERE customer_id = $1
        RETURNING *
    `;
    const { rows } = await pool.query(query, values);
    return rows[0];
};
