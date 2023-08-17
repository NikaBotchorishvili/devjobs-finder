import express from "express";
import { getJobs, postJob } from "../controller/JobController";
import fileUpload from "express-fileupload"

import { fileExtensionLimiter } from "../middleware/fileExtensionLimiter";

const JobRoutes = express.Router()
JobRoutes.route("/")
    .get(getJobs)
    .post(fileUpload({ createParentPath: true }), fileExtensionLimiter([".png", ".svg", ".jpeg"]), postJob)

export default JobRoutes