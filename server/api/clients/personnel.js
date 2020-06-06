const express = require('express')
const router = express.Router()

//set up routers
const newPersonnelRoutes = require('./personnel_new')
const onePersonnelRoutes = require('./personnel_one')

//Get all
router.get('/', (req, res, next) => {
  res.status(200).json({ message: "main personnel route" })
})

router.use('/new', newPersonnelRoutes)
router.use('/one', onePersonnelRoutes)

module.exports = router