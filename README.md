Express Applications README
This repository contains three Express applications demonstrating different functionalities:

1. Displaying Group Names
Description
This application displays a list of group names in HTML format.

Usage
Install dependencies using npm install.
Run the server using node app.js.
Open a web browser and navigate to http://localhost:3000 to view the group names.
2. Displaying JSON Data
Description
This application reads JSON data from a file and serves it as a JSON response.

Usage
Install dependencies using npm install.
Ensure there's a JSON file named data.json inside the data directory.
Run the server using node app.js.
Send a GET request to http://localhost:3000/data to retrieve the JSON data.
3. CRUD Operations with JSON Data
Description
This application implements CRUD (Create, Read, Update, Delete) operations on JSON data stored in a file.

Usage
Install dependencies using npm install.
Ensure there's a JSON file named data.json inside the data directory with initial data.
Run the server using node app.js.
Perform CRUD operations:
Create: Send a POST request to http://localhost:3001/create to add a new entry.
Update: Send a PUT request to http://localhost:3001/update/:id with the ID of the entry to update.
Delete: Send a DELETE request to http://localhost:3001/delete/:id with the ID of the entry to delete.
