const express = require('express');
const app = express();
const path = require('path');
const calculatorRoutes = require('./routes/calculatorRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use calculator routes
app.use('/calculator', calculatorRoutes);

// Swagger setup
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Calculator API",
            version: "1.0.0",
            description: "API for performing basic arithmetic operations",
        },
        servers: [{ url: "http://localhost:3000" }],
    },
    apis: ["./routes/*.js"], // Path to API documentation
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
    console.log("Swagger docs available at http://localhost:3000/api-docs");
});
