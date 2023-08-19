import FilteringForm from "@/components/pages/Home/FilteringForm";
import List from "@/components/pages/Home/Jobs/List";
import getJobs from "@/libs/getJobs";

export default async function Home() {
	const jobs = await getJobs();
	console.log(jobs);
	return (
		<>
			<FilteringForm />
			<List jobs={jobs} />
		</>
	);
}
