const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const port = process.env.PORT || 3000

require('./config/routes')(app)
async function listen() {
  await mongoose.connect('mongodb://mongodb/bookAPI')
  console.log('Connected to database...✨')

  app.listen(port, () => {
    console.log(`Sam API listening at http://localhost:${port} 🚀`)
  })
}

listen()