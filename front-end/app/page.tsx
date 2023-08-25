import FilteringForm from "@/components/pages/Home/FilteringForm";
import List from "@/components/pages/Home/Jobs/List";
import getJobs from "@/libs/getJobs";

export default async function Home({
	searchParams,
}: {
	searchParams: { [key: string]: string };
}) {
	const jobs = await getJobs({...searchParams});
	return (
		<>
			<FilteringForm />
			<List jobs={jobs} />
		</>
	);
}
