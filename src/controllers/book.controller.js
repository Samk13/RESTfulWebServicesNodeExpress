'use strict'

/**
 * Module dependencies.
 */
const { Book } = require('../models/book.model')

const controller = {
    list: async (req, res, next) => {
        const query = {}
        if (req.query.author) {
            query.author = req.query.author
        }
        try {
            const books = await Book.find(query)
            return res.json( books )
        } catch (err) {
            err.log = `[BookController:list] ${err.message}`
            next(err)
        }
    },

    get: async (req, res, next) => {
        try {
            const book = await Book.findById(
                req.params.id
            )
            if (!book) {
                return res.status(404).send('resourceNotFound')
            }
            return res.json(book)
        } catch (err) {
            err.log = `[BookController:get] ${err.message}`
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const book = await Book.create(req.body)
            return res.status(201).json(book)
        } catch (err) {
            err.log = `[BookController:create] ${err.message}`
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const book = await Book.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
            return res.json(book)
        } catch (err) {
            err.log = `[BookController:update] ${err.message}`
            next(err)
        }
    },

    delete: async (req, res, next) => {
        // Delete user by id
        try {
            const result = await Book.findByIdAndDelete(
                req.params.id
            )

            return res.json(result)
        } catch (err) {
            err.log = `[AccommodationController:delete] ${err.message}`
            next(err)
        }
    },
}

module.exports = controller
