const express = require('express')
const mongoose = require('mongoose')

const app = express()
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