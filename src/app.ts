import express from "express"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

import masterRouter from "./routes/master.routes.js"
import companyRouter from "./routes/business_entities/company.routes.js"

app.use("/api/v1/master", masterRouter)
app.use("/api/v1/business-entities", companyRouter)

export { app }