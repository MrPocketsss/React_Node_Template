const express = require('express')
const router = express.Router()

//set up routers
const newTicketRoutes = require('./new')
const oneTicketRoutes = require('./one')

//Get all
router.get('/', (req, res, next) => {
  res.status(200).json({ message: "main ticket route" })
})

router.use('/new', newTicketRoutes)
router.use('/one', oneTicketRoutes)

module.exports = router

