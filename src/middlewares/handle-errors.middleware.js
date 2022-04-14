const logger = (str) => {
    console.error('\x1b[33m', '%'.repeat(100), '\x1b[0m')
    console.error('\x1b[31m', `${str}`)
    console.error('\x1b[33m', '%'.repeat(100), '\x1b[0m')
}

const errorResObj = (errorCode, errorMessage, errorDetails) => {
    return {
        errorCode: errorCode || 500,
        errorMessage: errorMessage || 'Something went wrong!',
        errorDetails: errorDetails || {}
    }
}

const handleErrorsLogger = (err, req, res, next) => {
    logger(`🟠 ${err.log}`)
    next(err)
}

const handelErrorsfallback = (err, req, res) => {
    logger(err)
    return res.status(500).json(errorResObj(500, 'Something went wrong!', err))
}

const handleErrorsMiddlewares = [
    handleErrorsLogger,
    handelErrorsfallback,
]
module.exports = { handleErrorsMiddlewares }