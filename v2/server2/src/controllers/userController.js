const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

// Регистрация пользователя
exports.registerUser = async (req, res) => {
    const { login, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.createUser({ login, email, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
};

// Авторизация пользователя
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.getUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.user_id, login: user.login, email: user.email }, jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Failed to log in user' });
    }
};

// Проверка авторизации
exports.checkAuth = async (req, res) => {
    try {
        res.json({ isAuthenticated: true, user: req.user });
    } catch (error) {
        console.error('Error checking authentication:', error);
        res.status(500).json({ error: 'Failed to check authentication' });
    }
};

// Получение профиля пользователя
exports.getUserProfile = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Failed to fetch user profile' });
    }
};

// Обновление профиля пользователя
exports.updateUserProfile = async (req, res) => {
    const { id } = req.user;
    try {
        const updatedUser = await userModel.updateUser(id, req.body);
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'Failed to update user profile' });
    }
};
