//importing mongoose
const mongoose = require('mongoose');
require('dotenv').config();

//async function to connect to the mongoDB database
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
      }
};

//so connectDB can be used in other parts of the application
module.exports = connectDB;