export const errorHandler = (err, req, res, next) => {
    if (!err) {
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal server error";
        res.status(statusCode).json({
            status: "error",
            message,
            data: null,
            error: err.stack,
        });
    }
};

export class CustomError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.name = 'Custom Error'
        this.statusCode = statusCode
        Error.captureStackTrace(this)
    }
}