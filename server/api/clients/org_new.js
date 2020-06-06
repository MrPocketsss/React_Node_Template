const express = require('express')
const router = express.Router()

//Get all
router.get('/', (req, res, next) => {
  res.status(200).json({ message: "get new organization route" })
})

router.post('/', (req, res, next) => {
  res.status(200).json({ message: "post new organization route" })
})

module.exports = router