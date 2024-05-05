const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDatabase = require('./database/database');

// Load environment variables
dotenv.config();

// Create an express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
connectDatabase();

// Define the port
const PORT = process.env.PORT || 5000;

// Test endpoint
app.post('/test', (req, res) => {
    res.send('Test API is working!');
});

// Configure routes
app.use('/api/reservation', require('./routes/reservationRoutes'));
app.use('/api/appointment', require('./routes/appointmentRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
