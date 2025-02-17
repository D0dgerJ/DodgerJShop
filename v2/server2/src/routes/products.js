const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Получить список всех продуктов
router.get('/', productController.getProducts);

// Получить продукт по ID
router.get('/:id', productController.getProductById);

// Добавить новый продукт (только для авторизованных пользователей)
router.post('/', authMiddleware.verifyToken, productController.createProduct);

// Обновить информацию о продукте (только для администратора)
router.put(
    '/:id',
    authMiddleware.verifyToken,
    authMiddleware.verifyRole('admin'), // Проверка роли администратора
    productController.updateProduct
);

// Удалить продукт (только для администратора)
router.delete(
    '/:id',
    authMiddleware.verifyToken,
    authMiddleware.verifyRole('admin'), // Проверка роли администратора
    productController.deleteProduct
);

module.exports = router;
