"use client";

import Item from "./Item";
import { Job } from "@/types";
function List({jobs}: {jobs: Job[]}) {
	const content = jobs.map((job) => {
		return (
			<Item
				key={job._id}
				id={job._id}
				company={job.company}
				logo={job.logo}
				logoBackground={job.logoBackground}
                location={job.location}
                position={job.position}
				postedAt={job.postedAt}
				contract={job.contract}
			/>
		);
	});

	return (
		<section className="flex w-[90%] mx-auto flex-row justify-between flex-wrap grid-cols-[1fr,1fr,1fr] gap-y-10 gap-x-5 mt-10">
            {content}
        </section>
	);
}

export default List;
