
import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJObById, postJob } from "../controllers/job.controller.js";

const router=express.Router();

router.route("/post").post(isAuthenticated,postJob)
router.route("/get").get(isAuthenticated,getAllJobs)
router.route("/getAdminJobs").get(isAuthenticated,getAdminJobs)
router.route("/get/:id").get(isAuthenticated,getJObById)

export default router;