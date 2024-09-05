// app.js
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// DB Connect Middleware
const dbMiddleware = require('./Middlewares/dbMiddlewares');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(dbMiddleware);

const authRoute = require('./Routes/AuthRouter');
const postRoute = require('./Routes/PostRouter');

// Routing
// Auth Route
app.use('/auth', authRoute);

// Post Route
app.use('/api', postRoute);

app.get('/', (req, res) => {
  res.send("Server is running ...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
