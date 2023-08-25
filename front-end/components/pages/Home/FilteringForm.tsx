"use client";
import Top from "@/components/commons/Top";
import CheckBox from "@/components/pages/Home/CheckBox";
import Dialog from "@/components/pages/Home/Dialog";
import {
	faSearch,
	faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {
	// const [formData, setFormData] = useState();
	return (
			<Top>
				<form className="flex items-center bg-white dark:bg-veryDarkBlue h-[50px] box-content px-5 py-3 rounded-lg shadow-lg sm:gap-x-0 gap-x-3">
					<div className="h-full relative sm:border-r sm:border-r-darkGrey">
						<FontAwesomeIcon
							className="sm:block text-violet h-[20px] hidden absolute top-1/2 -translate-y-1/2 left-3 select-none"
							icon={faSearch}
						/>
						<input
							className="h-full dark:bg-veryDarkBlue border-none sm:px-10 md:pl-12 lg:pl-12 sm:w-[200px] lg:w-[330px] text-ellipsis text-sm focus:outline-none"
							type="text"
							name="company"
							placeholder="Filter by company"
						/>
					</div>
					<div className="h-full relative ">
						<FontAwesomeIcon
							className="sm:block text-violet h-[20px] hidden absolute top-1/2 -translate-y-1/2 left-3 select-none"
							icon={faLocationPin}
						/>
						<input
							className="h-full dark:bg-veryDarkBlue border-none hidden sm:block pl-10 mr-4 md:pl-12 md:mr-6 lg:pl-12 lg:mr-8 sm:w-[200px] lg:w-[330px] text-ellipsis text-sm focus:outline-none "
							placeholder="Filter by location…"
							type="text"
							name="location"
						/>
					</div>
					<CheckBox className="lg:inline hidden"/>
					<Dialog/>
					<button className="btn-primary sm:px-2 md:px-2 lg:px-5  ">
						<span className="hidden sm:block">Search</span>
						<FontAwesomeIcon
							className="block sm:hidden"
							icon={faSearch}
						/>
					</button>
				</form>
			</Top>
	);
}
