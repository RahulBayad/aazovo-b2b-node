import { Router } from "express";
import { getUnits } from "../controllers/master/units.controller.js";
import { getCountries } from "../controllers/master/countries.controller.js";

const router = Router()

router.route("/units").get(getUnits)
router.route("/countries").get(getCountries)

export default router