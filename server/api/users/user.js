const express = require('express')
const router = express.Router()

const registerRoutes = require('./register')
const loginRoutes = require('./login.js')
const authRoutes = require('./me')

router.use('/register', registerRoutes)
router.use('/login', loginRoutes)
router.use('/me', authRoutes)


module.exports = router