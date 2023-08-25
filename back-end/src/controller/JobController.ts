import { Request, Response } from "express";
import Job from "../models/Job";
import { UploadedFile } from "express-fileupload";
import path from "node:path";
import GenerateRandomFileName from "../helpers/GenerateRandomFileName";

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
		requirements_content,
		requirements_items,
		role_content,
		role_items,
	} = req.body;
	const logo = req.files?.logo as unknown as UploadedFile;
	console.log(role_items);
	console.log(requirements_items);
	if (logo) {
		let randomFileName = GenerateRandomFileName(logo.name);
		Job.create({
			company,
			position,
			contract,
			location,
			website,
			apply,
			description,
			logoBackground,
			logo: randomFileName,
			requirements: {
				content: requirements_content,
				items: requirements_items,
			},
			role: {
				content: role_content,
				items: role_items,
			},
		});
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

export async function getJob(req: Request, res: Response) {
	const { id } = req.params;

	const data = await Job.findById(id).exec();
	console.log(data);

	return res.status(200).json(data);
}

export async function getJobs(req: Request, res: Response) {
	try {
		const location = req.query.location || "";
		const fullTime = req.query.fullTime == "on" ? "full time" : "";
		const companyName = req.query.company || "";

		const filteredJobs = await Job.find({
			company: { $regex: companyName, $options: "i" },
			location: { $regex: location, $options: "i" },
			contract: { $regex: fullTime, $options: "i" },
		}).exec();

		return res.status(200).json(filteredJobs)
	} catch (err) {
		return res.status(500).json({ message: err });
	}
}
