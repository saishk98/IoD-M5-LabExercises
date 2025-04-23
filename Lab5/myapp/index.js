const express = require('express');
const app = express();
const path = require('path');
const calculatorRoutes = require('./routes/calculatorRoutes');

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Use calculator routes
app.use('/calculator', calculatorRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
