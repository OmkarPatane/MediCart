const mongoose=require("mongoose")
require("dotenv").config()
const MONGOURI=process.env.MONGOURI

const connectionDB=mongoose.connect(MONGOURI)

module.exports=connectionDB