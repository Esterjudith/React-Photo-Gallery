const Image = require("../model/image")

module.exports = {
    getIndex: async (req, res) => {
        {
            res.send('Hello')
        }
        // } (req, res) => {
        //     res.json({ message: 'Hello from server!' }

    },
    getImage: async (req, res) => {
        try {
            const image = await Image.find({}).sort({ _id: -1 })
            res.status(200).json(image)
        } catch (error) {
            console.log(err)
        }
    },
    createImage: async (req, res) => {
        try {
            const { image, title } = req.body
            const createImage = {
                image,
                title,
            }
            if (createImage) {
                const newImage = await Image.create(createImage)
                console.log("Post has been added!")
                res.status(201).json(newImage)
            }
        } catch (err) {
            console.log(err);
            res.status(404).json({ msg: "Invalid Data" })
        }
    }
}