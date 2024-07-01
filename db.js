const mongoose = require('mongoose');

// URL connection to MongoDB
const mongoURL = 'mongodb://localhost:27017/Hotels';
mongoose.connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB server");
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const db = mongoose.connection;

db.on('disconnected', () => {
  console.log("Connection to MongoDB server lost");
});

module.exports = db;
