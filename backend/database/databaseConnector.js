const mongoose = require('mongoose')

const ConnectDatabase = (connection_url) => {
  mongoose.connect("mongodb+srv://vedang12:vedang12@cluster0.nx5oect.mongodb.net/Library?retryWrites=true&w=majority&appName=Cluster0")
}

module.exports = { ConnectDatabase }
