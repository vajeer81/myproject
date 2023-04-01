const mongoose = require("mongoose")
const artical = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please add the title"]
    },
    dis:{
        type:String,
        required:[true,"please add the dis"]
    },
    image:{
        type:String,
        required:[true,"please add the title"]
    }
})


module.exports = mongoose.model("artical",artical)