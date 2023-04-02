const artical = require("../model/articalmodel")
const jwt = require("jsonwebtoken")
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
        res.status(200).json({
            title:data.title,
            dis:data.dis,
            image:data.image,
            token:tokenjanret(data._id)
        
        })
    } catch (error) {
        res.status(404).json(error)
    }
})


router.put("/:_id",async(req,res)=>{
    try {
       const data = await artical.findById(req.params._id)
       const update = await artical.findOneAndUpdate(req.params._id,req,body,{new:true}) 
       res.status(200).json(update)
    } catch (error) {
        res.status(404).json(error)
    }
})
router.delete("/:_id",async(req,res)=>{
    try {
        const deleteresult = await artical.deleteMany({_id:req.params._id})
        res.status(200).json({deleteresult:deleteresult})
    } catch (error) {
        res.status(404).json(error)
        
    }
})

const tokenjanret = (id)=>{
    return jwt.sign({id},"vajeerkhan",{expiresIn:"30d"})
}
module.exports = router