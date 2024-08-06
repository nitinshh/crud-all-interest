const express = require('express')
const app = express()
const PORT= 3000
const dotenv = require('dotenv')
dotenv.config()

require('./dbConnection').connectdb()
// require('./models/index')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const userRouter=require("./routers/userRouter")
app.use("/user",userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})