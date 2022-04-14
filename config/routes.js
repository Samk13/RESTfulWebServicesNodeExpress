const bookRouter = require('../src/routes/book.route')
const { handleErrorsMiddlewares } = require('../src/middlewares/handle-errors.middleware')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Sam API endpoint v1.0!')
  })

  app.get('/api/v1', (req, res) => {
    res.send('Welcome to sam API v1 🎉')
  })

  app.use('/api/v1/book', bookRouter)

  app.all('*', (req, res) => {
    res.status(400).send('bad request')
  })

  /**
     * Error handling
     * Important that it Should stay the last middleware so don't put routes after it!
     */
  app.use(handleErrorsMiddlewares)
}
