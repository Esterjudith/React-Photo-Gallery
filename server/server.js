const express = require('express')
const app = express()
const logger = require('morgan');
const connectDB = require('../server/config/database');
const cors = require('cors')
const upload = require("./middleware/multer")
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

// const imageUploadPath = 'C:\\Users\\Ben\\OneDrive\\Documents\\Interview Project\\React-Photo-Gallery\\server\\uploaded_Images'

// const upload = () => {
//     multer({
//         storage: multer.diskStorage({}),
//         fileFilter: (req, file, cb) => {
//             let ext = path.extname(file.originalname);
//             if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//                 cb(new Error("File type is not supported"), false);
//                 return;
//             }
//             cb(null, true);
//         },
//     }).single("file")
// }

// app.use(upload)




// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, imageUploadPath)
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
//     }
// })
// const imageUpload = multer({ storage: storage })


//Logging
app.use(logger("dev"));


app.use('/', imageRoutes)



//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
})