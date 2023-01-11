const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer')
const { getIndex, getImage, createImage } = require('../controllers/image')


router.get('/', getIndex)
router.get('/images', getImage)
router.post("/", upload.single("file"), createImage)

module.exports = router