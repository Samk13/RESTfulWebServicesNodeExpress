const express = require('express')
const bookRouter = express.Router()
const bookController = require('../controllers/book.controller')


bookRouter.post('/', bookController.create)

bookRouter.get('/', bookController.list)
bookRouter.get('/:id', bookController.get)
bookRouter.patch('/:id', bookController.update)
bookRouter.delete('/:id', bookController.delete)

module.exports = bookRouter
