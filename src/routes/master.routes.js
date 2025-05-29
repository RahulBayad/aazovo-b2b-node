import { Router } from "express";
import { getUnits } from "../controllers/master/units.controller.js";
import { getCountries } from "../controllers/master/countries.controller.js";
import { getContinents } from "../controllers/master/continents.controller.js";

const router = Router()

router.route("/units").get(getUnits)
router.route("/countries").get(getCountries)
router.route("/continents").get(getContinents)
router.route("/continents/create").post(getContinents)

export default router