const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

//DB Connect
const mongodbConnection = require('./Config/db');
mongodbConnection();


app.get('/', (req, res) =>{
    res.send("Server is running ...")
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})