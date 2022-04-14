const express = require('express')

const bookRouter = express.Router()
const bookController = require('../controllers/book.controller')
const { handleFormsMiddleware } = require('../middlewares/sanatizeInput.middleware')

bookRouter.post('/', handleFormsMiddleware, bookController.create)

bookRouter.get('/', bookController.list)
bookRouter.get('/:id', bookController.get)
bookRouter.patch('/:id', handleFormsMiddleware, bookController.update)
bookRouter.delete('/:id', bookController.delete)

module.exports = bookRouter
