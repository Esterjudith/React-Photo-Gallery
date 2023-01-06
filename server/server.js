const express = require('express')
const app = express()
const logger = require('morgan');
const connectDB = require('../server/config/database');
const cors = require('cors')
const multer = require('multer')
const path = require('path')


const corsOrigin = 'http://localhost:3000'

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect to Database
connectDB();

app.use(express.static(__dirname + '../..'))

app.use(cors({
    origin: [corsOrigin],
    credentials: true //enable set cookie
}))

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const imageUploadPath = 'C:\\Users\\Ben\\OneDrive\\Documents\\Interview Project\\React-Photo-Gallery\\server\\uploaded_Images'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imageUploadPath)
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
    }
})
const imageUpload = multer({ storage: storage })


//Logging
app.use(logger("dev"));

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' })
})

app.post('/image-upload', imageUpload.array("my-image-file"), (req, res) => {
    console.log('req.body', req.body)
    console.log('Got a POST request')
    res.send('Got a POST request')
})

//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
})