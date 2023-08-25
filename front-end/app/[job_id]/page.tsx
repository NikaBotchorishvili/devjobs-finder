import Details from "@/components/pages/details";

function DetailsPage({ params }: { params: { job_id: string }}) {	

	return (
		<Details id={params.job_id as string} />
	);
}

export default DetailsPage;
