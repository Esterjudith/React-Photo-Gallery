const express = require('express')
const app = express()
const logger = require('morgan');
const connectDB = require('../server/config/database');

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect to Database
connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' })
})

//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
})