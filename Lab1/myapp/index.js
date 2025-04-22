import express from 'express';
const app = express();
const port = 3000;

// Function to create a server on a given port
const createServer = (port) => {
    const app = express();

    app.get('/', (req, res) => {
        res.send(`Hello World! Server running on port ${port}!`);
    });

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
};

// Create multiple servers on different ports
const ports = [3000, 3001, 3002];

ports.forEach(port => createServer(port));