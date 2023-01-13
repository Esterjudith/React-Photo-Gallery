const express = require("express");
const router = express.Router();
// const upload = require('../middleware/multer')
const { getImage, createImage } = require('../controllers/image')



router.get('/images', getImage)
router.post('/', createImage)

module.exports = router