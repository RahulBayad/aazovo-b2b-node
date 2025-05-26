import { config } from "dotenv"
import { app } from "./app.js"
import dbConnection from "./db/database.js"

config({
    path : "./src/.env"
})

dbConnection().then(()=>{
    console.log("db connected");
})
app.listen( process.env.PORT || 3002 , ()=>{
    console.log("Server started at port", process.env.PORT )
})