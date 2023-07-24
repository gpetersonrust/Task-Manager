const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for views (if not in the default 'views' folder)
// const path = require('path');
// app.set('views', path.join(__dirname, 'your-views-folder'));

// Route to display tasks
app.get('/tasks', (req, res) => {
  // Your logic to fetch tasks from the database and render the view
});

// Route to add a new task
app.post('/tasks', (req, res) => {
  // Your logic to add a new task to the database
});

// Route to mark a task as completed
app.put('/tasks/:id', (req, res) => {
  // Your logic to update the task status in the database
});

//  listen for requests
app.listen(3002, () => {
  console.log("Server is listening on port 3002");
});