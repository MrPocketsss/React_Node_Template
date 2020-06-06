const express = require('express')
const router = express.Router()

//Get all
  //('/newTicket')
router.get('/', (req, res, next) => {
  res.status(200).json({ message: "get new ticket route" })
})

router.post('/', (req, res, next) => {
  res.status(201).json({ message: "post new ticket route" })
})

module.exports = router