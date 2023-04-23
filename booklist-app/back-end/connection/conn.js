const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
mongoose.set("strictQuery",false)
const DB_URL = process.env.DB_URI;
async function getConn (){
    await mongoose.connect(DB_URL).then(()=>{
        console.log("connected to mongodb");
    }).catch(e =>{console.log("not connected")})
}
module.exports = getConn;