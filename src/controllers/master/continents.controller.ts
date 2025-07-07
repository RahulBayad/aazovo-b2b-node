import { Request, Response } from "express";
import { db } from "../../index.ts"

export const getContinents = async (req: Request, res: Response): Promise<void> =>{
    try {
        const [rows] = await db.query(`SELECT * FROM continents`)
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

export const createContinent = async (req: Request, res: Response): Promise<void> =>{
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