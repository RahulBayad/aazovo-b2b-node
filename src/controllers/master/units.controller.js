import { db } from "../../index.js"

export const getUnits = async (req,res)=>{
    try {
        const [rows] = await db.query("SELECT * FROM units")
        console.log("units are", rows);
        res.json({
            status: 200,
            message: "Units Fetched Successfully!!s",
            data: rows
        })
    } catch (error) {
        console.log("error", error);
    }
}