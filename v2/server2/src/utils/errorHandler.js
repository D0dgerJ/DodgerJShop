module.exports = (err, req, res, next) => {
    console.error(`[Error]: ${err.message}`); // Логирование ошибки в консоль

    const statusCode = err.status || 500; // Код статуса ответа (по умолчанию 500)
    const message = err.message || 'Internal Server Error'; // Сообщение об ошибке

    res.status(statusCode).json({
        error: {
            message,
            status: statusCode,
        },
    });
};
