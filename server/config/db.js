const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/teamtaskdb';
    // Mongoose v6+ has these options enabled by default; passing them can cause errors
    const connection = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
    return connection.connection.host;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    console.error('Ensure MongoDB is running and MONGO_URI is correct in .env');
    process.exit(1);
  }
};

module.exports = connectDB;
