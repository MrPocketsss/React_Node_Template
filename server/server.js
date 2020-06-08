//import node packages
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

//set up server
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

//set up database
const InitiateMongoServer = require('./config/db')
InitiateMongoServer(process.env.ATLAS_URI)

//set up routers
const ticketRoutes = require('./api/tickets/tickets')
const personRoutes = require('./api/clients/personnel')
const orgRoutes    = require('./api/clients/org')
const userRoutes   = require('./api/users/user')

//add logging
app.use(morgan('dev'))

//routes to handle requests
app.use('/tickets', ticketRoutes)
app.use('/personnel', personRoutes)
app.use('/org', orgRoutes)
app.use('/users', userRoutes)

//routes to handle errors
//this route will call if a page isn't found
app.use((req, res, next) => {
  const error = new Error('Page not found')
  error.status = 404
  next(error)
})

//this route will be called if any other error occurs
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  })
})

app.listen(process.env.PORT, () => console.log('Server Start'))