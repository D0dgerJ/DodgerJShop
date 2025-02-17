const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Регистрация пользователя
router.post('/register', userController.registerUser);

// Авторизация пользователя
router.post('/login', userController.loginUser);

// Проверка авторизации
router.get('/auth-check', authMiddleware.verifyToken, userController.checkAuth);

// Получить профиль пользователя
router.get('/profile', authMiddleware.verifyToken, userController.getUserProfile);

// Обновить профиль пользователя
router.put('/profile', authMiddleware.verifyToken, userController.updateUserProfile);

module.exports = router;
