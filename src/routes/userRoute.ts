import {Router} from "express";
import { userSignUp } from "../controllers/userController";
const userRouter = Router();

userRouter.get("/signup", userSignUp)

export default userRouter