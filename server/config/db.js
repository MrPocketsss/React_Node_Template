const mongoose = require('mongoose')

const InitiateMongoServer = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log('Connected to the database')
  } catch (e) {
    console.log(e)
    throw e
  }
}

module.exports = InitiateMongoServer