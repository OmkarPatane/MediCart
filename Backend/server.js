const express=require("express")
const connectionDB = require("./config/db.config")
const UserRoute = require("./routes/user.routes")
const MedicineRouter = require("./routes/medicine.route")
const AuthRouter = require("./routes/auth.route")

const app=express()
const cors = require("cors");
app.use(cors());

app.use(express.json())
require("dotenv").config()
const PORT=process.env.PORT

app.get("/",(req,res)=>{
    res.json("API is working finely")
})

app.use("/user",UserRoute)
app.use("/medi",MedicineRouter)
app.use("/auth",AuthRouter)

app.listen(PORT,async()=>{
    try {
        await connectionDB
        console.log("MongoDB connected Successfully")
    } catch (error) {
        console.log("Error while connecting to MongoDB",error)
    }
    console.log(`Server is running on ${PORT}`)
})