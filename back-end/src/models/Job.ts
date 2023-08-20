import { Schema, model } from "mongoose";

type Requirements = {
	content: string;
	items: string[];
};

type Role = Required<Requirements>;

type Job = {
	company: string;
	position: string;
	postedAt: Date;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: Requirements;
	role: Role;
	logo: string;
	logoBackground: string;
};

const requirements = new Schema<Requirements>({
	content: { type: String },
	items: [{ type: String }],
});
const Role = new Schema<Role>({
	content: { type: String },
	items: [{ type: String }],
});

const job = new Schema<Job>({
	company: { type: String, required: true },
	contract: { type: String, required: true },
	position: { type: String, required: true },
	website: { type: String, required: true },
	apply: { type: String, required: true },
	description: { type: String, required: true },
	postedAt: { type: Date, default: Date.now },
	logo: { type: String, required: true },
	logoBackground: { type: String, required: true },
	requirements: { type: requirements },
	role: { type: Role },
});

const Job = model("Job", job);

export default Job;
