const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

//DB Connect
const mongodbConnection = require('./Config/db');
mongodbConnection();


const authRoute = require('./Routes/AuthRouter');


// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send("Server is running ...")
})


// Routing
app.use('/auth', authRoute)


app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})