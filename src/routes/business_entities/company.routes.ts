import { Router } from "express";
import { createCompany, getCompanies } from "../../controllers/business_entities/company.controller";
import { upload } from "../../middleware/multer";
const router = Router()

router.route("/companies").get(getCompanies)
router.route("/companies/create").post(upload.any(), createCompany)

export default router