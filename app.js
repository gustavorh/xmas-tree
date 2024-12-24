const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

// Serve static files (JavaScript, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  res.render('index'); // Render index.ejs
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
