import { Router } from 'express';
import {
    saveUserInforamtion,
    getUserInformation,
    getAllUserInformation
} from "../controllers/user/user.controller.js";

const router = Router();

router.route('/save').post(saveUserInforamtion);
router.route('/get/:_id').get(getUserInformation);  
router.route('/getAll').get(getAllUserInformation);


export const user_router = router;