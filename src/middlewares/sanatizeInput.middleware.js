const stripProtectedValues = (req, res, next) => {
  if (req.body && req.body._id) {
    delete req.body._id
  }
  next()
}

const handleFormsMiddleware = [stripProtectedValues]

module.exports = { handleFormsMiddleware }
