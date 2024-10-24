require('dotenv').config();
const express = require('express');
const db = require('./config/database');
const User = require('./models/User');
const Task = require('./models/Task');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');
const swaggerDocs = require('./config/swagger');


// Initialize express
const app = express();

// Middleware to parse JSON
app.use(express.json());


// Swagger Documentation
swaggerDocs(app);

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Connect to the database
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Simple Task Management Tool API');
});



// // Sync models with database
// db.sync({ force: false })  // Use {force: true} for dev (drops tables), false for prod
//   .then(() => {
//     console.log('Database & tables created!');
//   });


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
