const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample movie data not shown

// Start the server
app.listen(port, () => {
    console.log(`Movie API server running at http://localhost:${port}`);
});