const express = require('express');
const app = express();
const path = require('path');
const calculatorRoutes = require('./routes/calculatorRoutes');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/calculator', calculatorRoutes);

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}

module.exports = app; // Export app for Supertest
