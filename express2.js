// 1. Import required modules
const express = require('express');
const fs = require('fs');

// 2. Create Express application
const app = express();

// 3. Read JSON data from file
const jsonData = JSON.parse(fs.readFileSync('./data/data.json'));

// 4. Define a route to display JSON contents
app.get('/data', (req, res) => {
    // 5. Send JSON response
    res.json(jsonData);
});

// 6. Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
