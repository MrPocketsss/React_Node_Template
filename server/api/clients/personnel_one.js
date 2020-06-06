const express = require('express')
const router = express.Router()

//Get all
router.get('/', (req, res, next) => {
  res.status(200).json({ message: "get one person route" })
})

router.get('/', (req, res, next) => {
  res.status(200).json({ message: "edit one person route" })
})

router.get('/', (req, res, next) => {
  res.status(200).json({ message: "delete one person route" })
})

module.exports = router