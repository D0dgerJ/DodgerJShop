const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET; // Секретный ключ для проверки токена

// Middleware для проверки токена
exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Извлекаем заголовок Authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header is missing' });
    }

    const token = authHeader.split(' ')[1]; // Извлекаем токен из строки "Bearer <token>"
    if (!token) {
        return res.status(401).json({ error: 'Token is missing' });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(403).json({ error: 'Invalid or expired token' });
        }

        // Если токен валиден, добавляем данные пользователя в объект запроса
        req.user = decoded; // Например, { id: 1, login: "username", email: "user@example.com" }
        next(); // Передаем управление следующему middleware
    });
};

// Middleware для проверки роли пользователя
exports.verifyRole = (requiredRole) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== requiredRole) {
            return res.status(403).json({ error: 'Access denied' });
        }
        next();
    };
};
