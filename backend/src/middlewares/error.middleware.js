const errorHandler = (err, req, res, next) => {

    // Default error values
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // Log error details
    console.log("ERROR CAUGHT BY MIDDLEWARE:");
    console.log(err.stack);

    // Send error response
    return res
    .status(statusCode)
    .json({
        success: false,
        statusCode: statusCode,
        message: message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    });

}


export default errorHandler;