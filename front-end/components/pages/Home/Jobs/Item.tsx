import moment from "moment";
import Link from "next/link";

type ItemProps = {
	id: string;
	company: string;
	logo: string;
	logoBackground: string;
	location: string;
	position: string;
	postedAt: string;
	contract: string;
};

function Item({
	id,
	company,
	logo,
	logoBackground,
	location,
	position,
	contract,
	postedAt,
}: ItemProps) {
	
	return (
		<Link
			href={`/${id}`}
			className="shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] dark:bg-veryDarkBlue rounded-xl dark:shadow-none flex mx-auto w-full md:w-[300px] px-6 py-8 flex-col h-[150px] justify-between box-content relative"
		>
			<img
				src={`${process.env.API_URL}images/${logo}`}
				className={` absolute top-0 -translate-y-1/2 p-3  rounded-lg`}
				style={{ background: logoBackground }}
				alt="logo"
			/>
			<div className="flex flex-col gap-y-2">
				<p className="flex items-center text-darkGrey gap-x-2">
					<small>{postedAt}</small>
					<small className="font-bold">.</small>
					<small>{contract}</small>
				</p>
				<h1 className="text-xl font-bold">{position}</h1>
				<small className="text-lg text-darkGrey">{company}</small>
			</div>
			<h4 className="font-bold text-violet">{location}</h4>
		</Link>
	);
}

export default Item;
