import {Router} from "express";
import { userSignUp } from "../controllers/userController";
const userRouter = Router();

userRouter.post("/signup", userSignUp)

export default userRouter