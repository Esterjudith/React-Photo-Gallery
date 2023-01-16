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

//serving the frontend
app.use(express.static(path.join(__dirname, "../client/build")))

app.get("/", (req, res) => {
    console.log("Sending file:", path.join(__dirname, "./client/build/index.html"))
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err)
        }
    )

})

app.use(cors())

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(logger("dev"));


app.use('/', imageRoutes)



//Server Running
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`);
})