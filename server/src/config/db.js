const mongoose = require('mongoose');
const { mongodbURL } = require('../secret');

const connectDatabase = async (options = {}) => {
  try {
    await mongoose.connect(mongodbURL, options);
    console.log('Connection to MongoDB successfully');
    mongoose.connection.on('error', () => {
      console.error('MongoDB connection error: ', error);
    });
  } catch (error) {
    console.error('Could not connect to mongoDB: ', error.toString());
  }
};

module.exports = connectDatabase;
