type GetJobsParams = {
	company: string;
	location: string;
	fullTime: string;
};
async function getJobs({
	company = "",
	location = "",
	fullTime = "",
}: GetJobsParams) {
	const res = await fetch(
		`${process.env.API_URL}jobs/
				?fullTime=${fullTime}
				&company=${company}
				&location=${location}`,
		{ cache: "no-cache" }
	);
	const data = await res.json();
	return await data;
}

export default getJobs;
