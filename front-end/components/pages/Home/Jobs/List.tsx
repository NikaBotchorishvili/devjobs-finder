"use client";
import Item from "./Item";
import data from "../../../../public/data.json";
function List() {
	const content = data.map((company) => {
		return (
			<Item
				key={company.id}
				company={company.company}
				logo={company.logo}
				logoBackground={company.logoBackground}
                location={company.location}
                position={company.position}
				postedAt={company.postedAt}
				contract={company.contract}
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
