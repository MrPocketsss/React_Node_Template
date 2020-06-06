const express = require('express')
const router = express.Router()

//set up routers
const newOrgRoutes = require('./org_new')
const oneOrgRoutes = require('./org_one')

//Get all
router.get('/', (req, res, next) => {
  res.status(200).json({ message: "main organization route" })
})

router.use('/new', newOrgRoutes)
router.use('/one', oneOrgRoutes)

module.exports = router