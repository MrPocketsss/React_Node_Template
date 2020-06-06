require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')

//set up routers
const ticketRoutes = require('./api/tickets/tickets')
const personRoutes = require('./api/clients/personnel')
const orgRoutes    = require('./api/clients/org')

//add logging
app.use(morgan('dev'))

//routes to handle requests
app.use('/tickets', ticketRoutes)
app.use('/personnel', personRoutes)
app.use('/org', orgRoutes)

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