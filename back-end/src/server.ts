import dotenv from "dotenv";
import DBConnection from "./config/DBConnection";
dotenv.config();
DBConnection();
import express from "express";
import cors from "cors"
import corsOptions from "./config/corsOptions";
import mongoose from "mongoose";
import JobRoutes from "./Routes/JobRoutes";
import bodyParser from "body-parser";
import path from "node:path"
const PORT = process.env.PORT;
const app = express();

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.resolve(__dirname, "../", "public", "images")))
mongoose.connection.once("open", () => {
	app.listen(PORT, () => {
		console.log(`listening on PORT:${PORT}`);
	});
});
app.use("/jobs", JobRoutes)