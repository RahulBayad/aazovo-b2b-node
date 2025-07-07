import express from "express"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

import masterRouter from "./routes/master.routes.js"

app.use("/api/v1/master", masterRouter)

export { app }