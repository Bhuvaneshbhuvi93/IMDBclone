const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Routes
app.use('/api/movies', require('./routes/movies'));
app.use('/api/actors', require('./routes/actors'));
app.use('/api/producers', require('./routes/producers'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
