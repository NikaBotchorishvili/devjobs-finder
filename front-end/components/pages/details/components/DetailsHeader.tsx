import Top from "@/components/commons/Top";
import Image from "next/image";
import Link from "next/link";
import { Job } from "@/types";
function DetailsHeader({ job }: { job: Omit<Job, "roles" | "requirements"> }) {
	return (
		<Top>
			<section className="bg-white dark:bg-veryDarkBlue  sm:h-[100px] w-[80%] sm:w-[70%] md:w-[50%] flex box-content sm:justify-between sm:py-0 py-8 sm:gap-y-0 gap-y-3 items-center relative sm:flex-row flex-col justify-center">
				<div className=" flex h-full items-center">
					<div
						className={`flex absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 sm:translate-x-0 sm:translate-y-0 rounded-xl sm:rounded-none sm:static items-center justify-center sm:h-full w-[max] px-3 py-4 sm:px-7 sm:py-0`}
						style={{ background: job.logoBackground }}
					>
						<Image
							src={`https://devjobs-finder-production.up.railway.app/images/${job.logo}`}
							alt={job.company}
							layout="fill"
							objectFit="contain"
							className="sm:w-[40px]"
						/>
					</div>
					<div className="sm:flex hidden flex-col gap-y-2 ml-5">
						<h1 className="text-xl font-bold">{job.company}</h1>

						<small className="text-darkGrey text-sm">
							{job.website}
						</small>
					</div>
				</div>
				<div className="flex sm:hidden  flex-col gap-y-2 ml-5">
					<h1 className="text-xl font-bold">{job.company}</h1>

					<small className="text-darkGrey text-sm">{job.website}</small>
				</div>
				<Link
					href={job.website}
					className="text-violet bg-lightViolet bg-opacity-50 active:bg-opacity-70 dark:bg-[#303642] dark:bg-opacity-60 dark:active:bg-opacity-100 dark:text-white px-5 rounded-lg py-3 sm:mr-10 font-bold select-none "
				>
					Company Site
				</Link>
			</section>
		</Top>
	);
}

export default DetailsHeader;
