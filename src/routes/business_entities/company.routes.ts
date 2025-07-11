import { Router } from "express";
import { createCompany, getCompanies } from "../../controllers/business_entities/company.controller";
const router = Router()

router.route("/companies").get(getCompanies)
router.route("/companies/create").post(createCompany)

export default router