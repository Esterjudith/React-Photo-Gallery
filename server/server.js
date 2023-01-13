const express = require('express')
const app = express()
const logger = require('morgan');
const connectDB = require('../server/config/database');
const cors = require('cors')
// const upload = require("./middleware/multer")
const path = require('path')
const imageRoutes = require('./routes/image')




//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect to Database
connectDB();

app.use(express.static(__dirname + '../..'))

app.use(cors({
    origin: `${process.env.CLIENT_URL}`
}))

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(logger("dev"));


app.use('/', imageRoutes)



//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
})