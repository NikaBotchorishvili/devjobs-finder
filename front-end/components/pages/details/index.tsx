import getJob from "@/libs/getJob";
import DetailsContent from "./components/DetailsContent";
import DetailsHeader from "./components/DetailsHeader";
import { Job } from "@/types";

type DetailsProps = {
    id: string
}
async function Details({id}: DetailsProps) {
	const job: Job = await getJob(id);
	return (
		<>
			<DetailsHeader job={job} />
			<DetailsContent job={job} />
		</>
	);
}

export default Details;
