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
		<section className="flex flex-wrap w-[80%]  mx-auto mr-auto md:justify-between gap-y-10 gap-x-5 mt-10">
            {content}
        </section>
	);
}

export default List;
