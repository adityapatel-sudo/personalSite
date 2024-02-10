const express = require('express');
const path = require('path');

const index = express();
const port = 3000;

// Serve static files from the 'public' directory
index.use(express.static(path.join(__dirname, 'public')));

// Define routes
index.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Add more routes as needed

// Start the server
index.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
