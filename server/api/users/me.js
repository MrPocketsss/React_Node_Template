const express = require('express')
const router = express.Router()

const User = require('../../models/User')
const auth = require('../../middleware/auth')

router.get("/", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

module.exports = router