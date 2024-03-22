// 1. Import required modules
const express = require('express');

// 2. Create Express application
const app = express();

// 3. Define a route to display group names
app.get('/', (req, res) => {
    // 4. Send HTML response with group names
    res.send('<h1>Group Names</h1><ul><li>Group 1</li><li>Group 2</li><li>Group 3</li></ul>');
});

// 5. Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
