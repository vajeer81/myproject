const express = require('express')
const app = express()
app.use(express.json())
const artical = require("./Router/articalrouter")
app.use("/api/artical",artical)



app.listen(3000)