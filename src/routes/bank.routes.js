import { Router } from "express";
import { createBank, getAllBanks, searchBank } from "../controllers/bank/bank.controller.js";


const router = Router();

router.route('/createbank').post(createBank);
router.route('/getallbanks').post(getAllBanks)
router.route('/searchbank').post(searchBank)

export const bank_router = router;