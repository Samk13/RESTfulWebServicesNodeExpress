const mongoose = require('mongoose')

const { Schema } = mongoose

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean },
})

/**
 * revalidate on update
 */
// bookSchema.pre('findOneAndUpdate', (next) => {
//   this.options.runValidators = true
//   next()
// })

const Book = mongoose.model('Book', bookSchema, 'books')

module.exports = {
  Book,
  bookSchema,
}
