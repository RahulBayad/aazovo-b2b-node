import { configDotenv } from "dotenv"
import { app } from "./app"

configDotenv({
    path : "./.env"
})

app.listen( process.env.PORT || 3002 , ()=>{
    console.log("Server started at port ", PORT )
})