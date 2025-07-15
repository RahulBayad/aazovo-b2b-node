import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { PrismaClient } from "./../../../generated/prisma";
import { ApiResponse } from "../../utils/ApiResponse";
import { fileUpload, uploadOnCloudinary } from "../../utils/cloudinary";
import { setValByPath } from "../../utils/setValByPath";
import { ApiError } from "../../utils/ApiError";

const prisma = new PrismaClient();

export const getCompanies = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await prisma.company.findMany({
      include: {
        offices: true,
        bank_details: true,
        billingDocs: true,
        headOffice: true,
        kyc_verification: true,
        reference: true,
      },
    });
    console.log("data is", data);
    return res
      .status(201)
      .json(new ApiResponse(200, "Company Fetched Successfully!!", data));
  }
);

export const createCompany = asyncHandler(
  async (req: Request, res: Response) => {
    // console.log("request data", req.body);

    console.log("files", req.files);
    const formData = req.body;
    let {
      bank_details,
      reference,
      headOffice,
      offices,
      establishment_year,
      ...fields
    } = formData;
    const files = req.files;

    // Converting to Number
    if (establishment_year) establishment_year = Number(establishment_year);
    if (headOffice?.pincode) headOffice.pincode = Number(headOffice?.pincode);

    if (Array.isArray(offices) && offices.length > 0) {
      offices.forEach((office: any) => {
        if (office.pincode) office.pincode = Number(office?.pincode);
      });
    }

    // Assigning File values
    if (Array.isArray(files)) {
      await Promise.all(
        files.map(async (file: any) => {
          const resp = await uploadOnCloudinary(file);
          if (!resp?.secure_url) {
            throw new ApiError(500, "Error in file upload");
          }
          setValByPath(fields, file.fieldname, resp.secure_url);
        })
      );
    }

    const insert = await prisma.company.create({
      data: {
        ...fields,
        establishment_year,
        bank_details: {
          create: bank_details?.length > 0 ? bank_details : [],
        },
        reference: {
          create: reference ?? undefined,
        },
        headOffice: {
          create: headOffice ?? undefined,
        },
        kyc_verification: {
          create: fields.kyc_verification ?? undefined,
        },
        offices: {
          create: offices?.length ? offices : [],
        },
        billingDocs: {
          create: fields.billingDocs?.length ? fields.billingDocs : [],
        },
      },
    });
    console.log("inserted", insert )
    return res
      .status(201)
      .json(new ApiResponse(201, "Company Created Successfully!!", insert));
  }
);
