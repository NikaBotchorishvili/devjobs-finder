import List from "@/components/pages/Home/Jobs/List";
import getJobs from "@/libs/getJobs";
import dynamic from 'next/dynamic'
const FilteringForm = dynamic(() => import('@/components/pages/Home/FilteringForm'), { ssr: false })
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
