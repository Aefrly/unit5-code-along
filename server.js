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

// Root endpoint - API homepage
app.get('/', (req, res) => {
    res.json({ 
        message: "Welcome to the Movie API", 
        endpoints: { 
            "GET /movies": "Get all movies", 
            "GET /movies/:id": "Get a specific movie by ID" 
        } 
    }); 
});