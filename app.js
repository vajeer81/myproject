const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("sdfg")
})


app.listen(3000)