import { Request, Response, NextFunction } from "express";
import path from "node:path";
export const fileExtensionLimiter = (AllowedExtArray: string[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const files = req.files;

		const fileExtensions = [];
		if (req.files) {
			Object.keys(files).forEach((key) => {
				fileExtensions.push(path.extname(files[key].name));
			});
			const allowed = fileExtensions.every((ext) =>
				AllowedExtArray.includes(ext)
			);

			if (!allowed) {
				return res
					.status(422)
					.json({
						message: `Upload File Failed. Only ${AllowedExtArray.toString()} files allowed.`,
					});
			}
		}
		next();
	};
};
