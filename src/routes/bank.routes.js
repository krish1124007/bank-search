import { Router } from "express";
import { createBank } from "../controllers/bank/bank.controller.js";


const router = Router();

router.route('/createbank').post(createBank);


export const bank_router = router;