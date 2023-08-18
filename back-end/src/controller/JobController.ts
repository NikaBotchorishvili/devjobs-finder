import { Request, Response } from "express";
import Job from "../models/Job";
import { UploadedFile } from "express-fileupload";
import path from "node:path";
import GenerateRandomFileName from "../helpers/GenerateRandomFileName";

export async function getJobs(_req: Request, res: Response) {
	const jobs = await Job.find({}).exec();

	return res.json(jobs);
}

export async function postJob(req: Request, res: Response) {
	const {
		company,
		position,
		contract,
		location,
		website,
		apply,
		description,
		logoBackground,
	} = req.body;
	const logo = req.files["logo"] as UploadedFile;

	if (logo) {
		Job.create({
			company,
			position,
			contract,
			location,
			website,
			apply,
			description,
			logoBackground,
			logo: logo.name,
		});
		let randomFileName = GenerateRandomFileName(logo.name);
		const rootPath = path.resolve(
			path.dirname(__dirname),
			"../public",
			"images/",
			randomFileName
		);
		logo.mv(rootPath, (err) => {
			if (err) return res.status(500).json({ error: err });
		});
		
		return res.sendStatus(201);
	}
}
