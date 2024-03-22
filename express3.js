// 1. Import required modules
const express = require('express');
const fs = require('fs');

// 2. Create Express application
const app = express();

// 3. Read JSON data from file
let jsonData = JSON.parse(fs.readFileSync('./data/data.json'));

// 4. Define CRUD operations
// Create
app.post('/create', (req, res) => {
    // Add new data to JSON
    jsonData.push({ id: 7, name: 'New Entry' });
    // Write updated JSON back to file
    fs.writeFileSync('./data/data.json', JSON.stringify(jsonData));
    res.send('New entry added successfully!');
});

// Update
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    // Find data by ID and update
    jsonData = jsonData.map(item => {
        if (item.id === parseInt(id)) {
            return { id: item.id, name: 'Updated Entry' };
        }
        return item;
    });
    // Write updated JSON back to file
    fs.writeFileSync('./data/data.json', JSON.stringify(jsonData));
    res.send('Entry updated successfully!');
});

// Delete
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    // Filter out data with given ID
    jsonData = jsonData.filter(item => item.id !== parseInt(id));
    // Write updated JSON back to file
    fs.writeFileSync('./data/data.json', JSON.stringify(jsonData));
    res.send('Entry deleted successfully!');
});

// 5. Start the server
const port = 3001; // Change to a port number not in use
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
