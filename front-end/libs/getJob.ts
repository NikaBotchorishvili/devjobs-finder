async function getJob(id: string) {
	const res = await fetch(`${process.env.API_URL}jobs/${id}`, {
		cache: "no-cache",
	});
	const data = await res.json();
	return await data;
}

export default getJob;
