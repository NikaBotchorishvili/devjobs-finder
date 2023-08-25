import FilteringForm from "@/components/pages/Home/FilteringForm";
import List from "@/components/pages/Home/Jobs/List";
import getJobs from "@/libs/getJobs";

export default async function Home({
	searchParams,
}: {
	searchParams: { company: string; location: string; fullTime: "string" };
}) {
	const {company, location, fullTime} = searchParams;
	const jobs = await getJobs({
		company: company,
		location: location,
		fullTime: fullTime,
	});
	return (
		<>
			<FilteringForm />
			<List jobs={jobs} />
		</>
	);
}
