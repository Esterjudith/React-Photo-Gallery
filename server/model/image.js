const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    image: {
        type: Buffer,
        required: true
    },
    fileName: {
        type: String,

    }

})

module.exports = mongoose.model("Image", ImageSchema);