import { Job } from "@/types";
function DetailsContent({
	job,
}: {
	job: Pick<
		Job,
		| "requirements"
		| "role"
		| "position"
		| "company"
		| "location"
		| "contract"
		| "description"
	>;
}) {
	const reqItemsContent: React.ReactNode = job.requirements?.items.map(
		(item, id) => {
			return (
				<li
					key={id}
					className="before:content-[''] w-full h-full before:w-[5px] before:h-[5px] before:rounded-full before:bg-violet before:inline-block before:mr-5"
				>
					{item}
				</li>
			);
		}
	);
	const roleItemsContent: React.ReactNode = job.role?.items.map(
		(item, id) => {
			return (
				<li
					key={id}
					className="before:content-[''] w-full h-full before:w-[5px] before:h-[5px] before:rounded-full before:bg-violet before:inline-block before:mr-5"
				>
					{item}
				</li>
			);
		}
	);
	return (
		<>
			<section className="fixed bottom-0 w-full bg-white dark:bg-veryDarkBlue h-[100px]">
				<div className="w-[80%] sm:w-[70%] md:w-[50%] mx-auto flex justify-between items-end">
					<div>
						<h1 className="text-veryDarkBlue dark:text-white pt-5 font-bold text-xl">
							{job.position}
						</h1>
						<small className="text-darkGrey">{job.company}</small>
					</div>
					<button className="btn-primary ">Apply Now</button>
				</div>
			</section>
			<main className="w-[80vw] shadow-[0_0_5px_2px_rgba(0,0,0,0.2)] dark:shadow-none sm:w-[70vw] md:w-[50vw] dark:bg-veryDarkBlue mx-auto  mb-36 box-border p-5 rounded-xl">
				<section className="flex flex-col gap-y-10">
					<div className="flex justify-between items-center">
						<div>
							<small className="text-darkGrey text-md flex gap-x-2">
								<span>1w ago</span>
								<span>.</span>
								<span>{job.contract}</span>
							</small>
							<h1 className="text-xl font-bold text-veryDarkBlue dark:text-white">
								{job.position}
							</h1>
							<small className="text-violet font-bold text-md">
								{job.location}
							</small>
						</div>
						<button className="btn-primary">Apply Now</button>
					</div>

					<article className="text-darkGrey">
						<p>{job.description}</p>
					</article>

					<article className="text-darkGrey">
						<h1 className="text-xl font-bold dark:text-white text-veryDarkBlue mb-5">
							Requirements
						</h1>

						<p>{job.requirements.content}</p>

						<ul className="flex flex-col gap-y-5">
							{reqItemsContent}
						</ul>
					</article>
					<article className="text-darkGrey">
						<h1 className="text-xl font-bold text-veryDarkBlue dark:text-white mb-5">
							What You Will Do
						</h1>

						<p>{job.role?.content}</p>

						<ul className="flex flex-col gap-y-5 ">
							{roleItemsContent}
						</ul>
					</article>
				</section>
			</main>
		</>
	);
}

export default DetailsContent;
