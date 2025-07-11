import { Request, Response } from "express"
import { asyncHandler } from "../../utils/asyncHandler"
import { PrismaClient } from "./../../../generated/prisma"


const prisma = new PrismaClient()

export const getCompanies = async (req, res) => {
    try {
        const data  = await prisma.company.findMany()
         res.json({
            status: 200,
            message: "Companies Fetched Successfully!!",
            data: data
        }) 
        console.log("Data ", data)
    } catch (error) {
        console.log("Error ", error)
    }
}

export const createCompany = asyncHandler(async (req: Request, res: Response) => {
    console.log("request data", req.body)
    res.status(200).json({
        message: "Company Created",
        data: req.body
    })
})