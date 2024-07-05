import express from 'express';
import userController from '../controllers/user.controller.ts';
import { jwtCheck, jwtParse } from '../middleware/auth.ts';
import { validateUserRequest } from '../middleware/validations.ts';
const router = express.Router();
router.post("/create", jwtCheck, userController.createUser);
router.get("/get",jwtCheck,jwtParse,userController.getUser)
router.put("/update", jwtCheck, jwtParse, validateUserRequest , userController.updateUser);

export default router;