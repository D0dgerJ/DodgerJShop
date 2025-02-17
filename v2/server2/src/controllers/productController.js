const productModel = require('../models/productModel');

// Получить список всех продуктов
exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

// Получить продукт по ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.getProductById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};

// Добавить новый продукт
exports.createProduct = async (req, res) => {
    try {
        const newProduct = await productModel.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
};

// Обновить продукт
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await productModel.updateProduct(id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
};

// Удалить продукт
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await productModel.deleteProduct(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
};
