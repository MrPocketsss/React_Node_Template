const express = require('express')
const router = express.Router()

//Get all
router.get('/', (req, res, next) => {
  res.status(200).json({ message: "get ticket route" })
})

router.patch('/', (req, res, next) => {
  res.status(201).json({ message: "edit ticket route" })
})

router.delete('/', (req, res, next) => {
  res.status(201).json({ message: "delete ticket route" })
})

module.exports = router