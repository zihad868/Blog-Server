const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send("Server is running ...")
})

console.log(process.env.DB_USER)


app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})