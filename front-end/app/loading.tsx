import Skeleton from "@/components/Skeleton";

function Loading() {
	const SkeletonElements = [...Array(20).keys()].map((i) => (
		<Skeleton key={i} idx={i} />
	));
	return (
		<section className="flex flex-wrap w-[80%]  mx-auto mr-auto md:justify-between gap-y-10 gap-x-5 mt-10">
			{SkeletonElements}
		</section>
	);
}

export default Loading;
