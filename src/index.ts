import { config } from "dotenv"
import { app } from "./app.ts"
import dbConnection from "./db/database.ts"

config()

export const db = await dbConnection()

app.listen( process.env.PORT || 3002 , ()=>{
    console.log("Server started at port", process.env.PORT )
})