const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const port = process.env.PORT || 3000

require('./config/routes')(app)

const dbUrl = process.env.MONGODB_URI
async function listen() {
  await mongoose.connect(dbUrl)
  console.log('Connected to database...✨')

  app.listen(port, () => {
    console.log(`Sam API listening at http://localhost:${port} 🚀`)
  })
}

listen()
