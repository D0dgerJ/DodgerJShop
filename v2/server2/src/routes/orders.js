const express = require('express');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Создать новый заказ (только авторизованный пользователь)
router.post('/', authMiddleware.verifyToken, orderController.createOrder);

// Получить список всех заказов пользователя
router.get('/', authMiddleware.verifyToken, orderController.getOrdersByUser);

// Получить детали конкретного заказа по ID
router.get('/:id', authMiddleware.verifyToken, orderController.getOrderById);

// Отменить заказ
router.delete('/:id', authMiddleware.verifyToken, orderController.cancelOrder);

module.exports = router;
