import Image from "next/image";


type CheckBoxProps = {
	className: string;
};

function CheckBox({ className }: CheckBoxProps) {
	return (
		<div className="flex items-center gap-x-2 ">
			<div className="flex items-center justify-center relative w-[25px] h-[25px]">
				<input
					type="checkbox"
					className="p-3 dark:border-none absolute w-full h-full bg-opacity-20 rounded-md bg-veryDarkBlue checked:bg-violet dark:hover:bg-opacity-80 dark:bg-midnight peer appearance-none select-none cursor-pointer"
					name="fullTime"
					id=""
				/>
				<Image
					width={15}
					height={12}
					src="desktop/icon-check.svg"
					className="peer peer-checked:block hidden absolute pointer-events-none"
					alt="checkbox icon"
				/>
			</div>
			<label htmlFor="fulltime">
				Full Time <span className={`${className}`}>Only</span>
			</label>
		</div>
	);
}

export default CheckBox;
