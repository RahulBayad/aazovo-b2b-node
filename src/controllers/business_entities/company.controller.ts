import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { PrismaClient } from "./../../../generated/prisma";
import { ApiResponse } from "../../utils/ApiResponse";

const prisma = new PrismaClient();

export const getCompanies = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await prisma.company.findMany({
      include : {
        offices : true,
        bank_details : true,
        billingDocs : true,
        headOffice : true,
        kyc_verification : true,
        reference : true,
      }
    });
    return res
      .status(201)
      .json(new ApiResponse(200, "Company Fetched Successfully!!", data));
  }
);

export const createCompany = asyncHandler(
  async (req: Request, res: Response) => {
    // console.log("request data", req.body);
    console.log("files", req.files);
    // const files = req.files
    const formData = req.body
    let {
      bank_details,
      reference,
      headOffice,
      kyc_verification,
      offices,
      billingDocs,
      establishment_year,
      ...fields
    } = formData;
    const files = req.files
    
    establishment_year = Number(establishment_year)
    headOffice.pincode = Number(headOffice.pincode)

    offices.forEach((office: any) => {
      office.pincode = Number(office.pincode)
    })

    console.log("offices", offices);

    // const insert = await prisma.company.create({
    //   data : {
    //     ...fields,
    //     bank_details : {
    //       create : bank_details?.length > 0 ? bank_details : [],
    //     },
    //     reference: {
    //       create: reference ?? undefined,
    //     },
    //     headOffice: {
    //       create: headOffice ?? undefined,
    //     },
    //     kyc_verification: {
    //       create: kyc_verification ?? undefined,
    //     },
    //     offices: {
    //       create: offices?.length ? offices : [],
    //     },
    //     billingDocs: {
    //       create: billingDocs?.length ? billingDocs : [],
    //     },
        
    //   }
    // })
    // console.log("inserted", insert )
    return res
      .status(201)
      .json(new ApiResponse(201, "Company Created Successfully!!", []));
  }
);
