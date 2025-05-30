import { db } from "../../index.js"

export const getContinents = async (req,res)=>{
    try {
        const [rows] = await db.query(`SELECT * FROM continent`)
        console.log("Continents are", rows);
        res.json({
            status: 200,
            message: "Continents Fetched Successfully!!",
            data: rows
        })
    } catch (error) {
        console.log("error", error);
    }
}

export const createContinent = async (req, res)=>{
    try {
        const data = req?.body
        console.log("data", data)
        if(!data?.continent){
            res.json({
            status: 401,
            message: "Please Provide Continent Name!!",
        })
        }
        const [rows] = await db.query(
            `INSERT INTO continent (continent, created_on) VALUES (?, ?)`, 
            [ data?.continent, new Date()]
        ) 
        console.log("Continents created", rows);
        res.json({
            status: 200,
            message: "Continents created Successfully!!",
            data: rows
        })
    } catch (error) {
        console.log("error", error);
    }
}