import { db } from "../../index.js"

export const getCountries = async (req,res)=>{
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