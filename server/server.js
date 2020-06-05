const http = require('http') //basic server functionality
const app = require('./app') //my root application
const morgan = require('morgan') //logging functionality
const port = process.env.PORT || 5000 //set the port number of server
const server = http.createServer(app) //create the server

//set up routers
//const productRoutes = require('./api/routes/products')

//add logging
app.use(morgan('dev'))

//routes to handle requests
//app.use('/products', productRoutes)

//routes to handle error cases
//this route will call if a page isn't found
app.use((req, res, next) => {
  const error = new Error('Page not found')
  error.status(404)
  next(error)
})

//this route will be called if any other error occurs
app.use((error, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: error.message
    }
  })
})

server.listen(port) //set up the server to listen to requests on localhost:port
