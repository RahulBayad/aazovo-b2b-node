import { config } from "dotenv"
import { app } from "./app.js"
import dbConnection from "./db/database.js"

config({
    path : "./src/.env"
})

export const db = await dbConnection()

app.listen( process.env.PORT || 3002 , ()=>{
    console.log("Server started at port", process.env.PORT )
})