const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title:  { type: String},
    author: { type: String},
    genre:  { type: String },
    read:   { type: Boolean}
})

const Book = mongoose.model('Book', bookSchema, 'books')

module.exports = {
    Book,
    bookSchema
}
