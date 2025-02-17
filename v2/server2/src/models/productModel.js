const pool = require('../config/database');

// Получить список всех продуктов
exports.getAllProducts = async () => {
    const query = 'SELECT * FROM products';
    const { rows } = await pool.query(query);
    return rows;
};

// Получить продукт по ID
exports.getProductById = async (id) => {
    const query = 'SELECT * FROM products WHERE product_id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

// Добавить новый продукт
exports.createProduct = async (data) => {
    const { name, price, description, category_id, brand, material } = data;
    const query = `
        INSERT INTO products (name, price, description, category_id, brand, material)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
    `;
    const { rows } = await pool.query(query, [name, price, description, category_id, brand, material]);
    return rows[0];
};

// Обновить продукт
exports.updateProduct = async (id, data) => {
    const fields = Object.keys(data).map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = [id, ...Object.values(data)];

    const query = `
        UPDATE products
        SET ${fields}
        WHERE product_id = $1
        RETURNING *
    `;
    const { rows } = await pool.query(query, values);
    return rows[0];
};

// Удалить продукт
exports.deleteProduct = async (id) => {
    const query = 'DELETE FROM products WHERE product_id = $1 RETURNING *';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};
