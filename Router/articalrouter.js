const artical = require("../model/articalmodel")
const express = require("express")
const router = express.Router()
router.use(express.json())
router.get("/", async (req, res) => {
    try {
        const data = await artical.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const { title, dis, image } = req.body
        if (!title || !dis || !image) {
            res.status(404).json({ error: "same thing  is missing" })
        }
        const data = await artical.create({
            title,
            dis,
            image
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})

module.exports = router