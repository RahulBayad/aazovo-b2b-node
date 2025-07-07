import { Request, Response } from "express";
import { db } from './../../index.ts'

export const getCountries = async (req: Request, res: Response): Promise<void>=>{
    try {
        const [rows] = await db.query(`
            SELECT * FROM country
            JOIN continent ON country.continent_id = continent.id
        `)
        console.log("Countries are", rows);
        res.json({
            status: 200,
            message: "Countries Fetched Successfully!!",
            data: rows
        })
    } catch (error) {
        console.log("error", error);
    }
}