import { CorsOptions } from "cors";
const corsOptions: CorsOptions = {
	origin: [
		"http://localhost:3000",
		"127.0.0.1:3000/",
		"https://devjobs-finder.vercel.app/",
	],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

export default corsOptions;
