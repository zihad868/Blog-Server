// app.js
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// DB Connect Middleware
const connectDB = require('./Config/db');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(connectDB);

const authRoute = require('./Routes/AuthRouter');

// Routing
app.use('/auth', authRoute);

app.get('/', (req, res) => {
  res.send("Server is running ...");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
