const httpError = require("http-errors");

// 404 Not Found error
const notFoundError = (req, res, next) => {
    next(httpError(404, "Your Requested Content Wasn't Found"));
};

// Default error handler
const defaultError = (err, req, res, next) => {
    res.status(err.status || 500).json(err);
};

module.exports = { notFoundError, defaultError };
