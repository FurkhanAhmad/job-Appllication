
import express from "express"
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { sigleUpload } from "../middlewares/multer.js";

const router=express.Router();

router.route("/register").post(sigleUpload,register)
router.route("/login").post(login)
router.route("/logout").get(logout);
router.route("/profile/update").patch(isAuthenticated, updateProfile)

export default router
