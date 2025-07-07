import { Request, Response } from "express";
import { db } from "../../index.ts";

export const getUnits = async (req: Request, res: Response): Promise<void> => {
  try {
    const [rows] = await db.query("SELECT * FROM units");
    console.log("units are", rows);
    
    res.json({
      status: 200,
      message: "Units Fetched Successfully!!s",
      data: rows,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};
