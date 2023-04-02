const express = require('express')
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
const artical = require("./Router/articalrouter")
app.use("/api/artical",artical)
mongoose.connect("mongodb+srv://vajeermohammad81:vajeerkhan123@cluster0.uoobtbm.mongodb.net/test")
mongoose.connection.on('error', err => {
    console.log('================>database failed ') 
})
mongoose.connection.on('connected', connected => { 
    console.log('=====================>database connected')
})


app.listen(3000)