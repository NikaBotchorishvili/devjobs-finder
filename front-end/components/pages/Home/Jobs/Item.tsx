import Image from "next/image";
import Link from "next/link";

type ItemProps = {
	company: string;
	logo: string;
	logoBackground: string;
	location: string;
	position: string;
	postedAt: string;
	contract: string;
};
function Item({
	company,
	logo,
	logoBackground,
	location,
	position,
	contract,
	postedAt,
}: ItemProps) {
	const logoImage = require("/public/" + logo);
	return (
		<Link href={`/${company}`} className=" shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] dark:bg-veryDarkBlue rounded-xl dark:shadow-none flex flex-col h-[150px] w-[80%] sm:w-[30%] md:w-25% lg:w-[21%] justify-between p-12  box-content relative">
			<Image
				src={logoImage}
				className={` absolute top-0 -translate-y-1/2 p-3 box-content rounded-lg`}
				style={{ background: logoBackground }}
				alt="logo"
			/>
			<div className="flex flex-col gap-y-2">
				<p className="text-darkGrey flex gap-x-2 items-center">
					<span>{postedAt}</span>
					<span className="font-bold">.</span>
					<span>{contract}</span>
				</p>
				<h1 className="font-bold text-xl">{position}</h1>
				<small className="text-darkGrey text-lg">{company}</small>
			</div>
			<h4 className="text-violet font-bold">{location}</h4>
		</Link>
	);
}

export default Item;
