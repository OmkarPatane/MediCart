const express=require("express")
const connectionDB = require("./config/db.config")
const UserRoute = require("./routes/user.routes")

const app=express()
app.use(express.json())
require("dotenv").config()
const PORT=process.env.PORT

app.get("/",(req,res)=>{
    res.json("API is working finely")
})

app.use("/user",UserRoute)

app.listen(PORT,async()=>{
    try {
        await connectionDB
        console.log("MongoDB connected Successfully")
    } catch (error) {
        console.log("Error while connecting to MongoDB",error)
    }
    console.log(`Server is running on ${PORT}`)
})