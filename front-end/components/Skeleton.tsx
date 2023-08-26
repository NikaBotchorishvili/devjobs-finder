function Skeleton({idx}: {idx: number}) {
	return (
		<div
			style={{
                animationDelay: `${idx * 0.05}s`,
                animationDuration: "1s",
            }}
			className="shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] dark:bg-veryDarkBlue rounded-xl dark:shadow-none flex mx-auto w-full md:w-[300px] px-6 py-8 flex-col h-[150px] justify-between box-content relative animate-pulse"
		>
			<div className="dark:bg-darkGrey bg-gray absolute top-0 -translate-y-1/2 p-3 w-[40px] h-[40px] rounded-lg"></div>
			<div className="flex flex-col gap-y-4 w-full">
				<p className="flex items-center gap-x-2">
					<small className="dark:bg-darkGrey bg-gray h-[10px] w-[20%]"></small>
					<small className="dark:bg-darkGrey bg-gray h-[10px] w-[20%]"></small>
					<small className="dark:bg-darkGrey bg-gray h-[10px] w-[20%]"></small>
				</p>
				<h1 className="dark:bg-darkGrey bg-gray w-full h-[25px]"></h1>
				<small className="dark:bg-darkGrey bg-gray w-[80%] h-[20px]"></small>
			</div>
			<h4 className=" dark:bg-darkGrey bg-gray w-[30%] h-[15px]"></h4>
		</div>
	);
}

export default Skeleton;
