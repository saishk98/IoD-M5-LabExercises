const express = require('express');
const calculatorRoutes = require('./routes/calculatorRoutes');
const app = express();
const port = 3000;
const extraRoutes = require('./routes/extraRoutes');
app.use('/extra', extraRoutes);

app.get('/', (req, res) => {
    res.send('Hello World, Welcome to the Express Calculator API!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use(express.json());
app.use('/calculator', calculatorRoutes);
