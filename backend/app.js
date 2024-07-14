//imports
const express = require('express');
const connectDB = require('./db');
const liftRoutes = require('./routes/lifts');
const cors = require('cors');

const app = express();

//connecting to the database
connectDB();

//handling CORS
app.use(cors());

//parsing JSON request bodies
app.use(express.json());

//routes
app.use('/api/lifts', liftRoutes);

//exporting so it can be used in other parts of the application
module.exports = app;