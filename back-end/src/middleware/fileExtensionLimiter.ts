import { Request, Response, NextFunction } from "express";
import path from "node:path";
import { UploadedFile } from "express-fileupload";
export const fileExtensionLimiter = (AllowedExtArray: string[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const files = req.files as unknown as UploadedFile[];
		
		const fileExtensions: any = [];
		if (req.files) {
			Object.keys(files).forEach((key: any) => {
				fileExtensions.push(path.extname(files[key].name));
			});
			const allowed = fileExtensions.every((ext: any) =>
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
