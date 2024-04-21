import Link from "next/link";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Image from "next/image";
import DesktopPattern from "../../../public/desktop/bg-pattern-header.svg";
function Header() {
	return (
		<header className="flex w-screen relative  md:h-[160px]  h-[136px]">
			<Image
				className="absolute w-full h-full -z-10"
				alt=""

				src={DesktopPattern}
			/>
			<div className="flex w-[70%] justify-between mx-auto items-start pt-5 sm:pt-0   sm:items-center">
				<Link
					href="/"
					className="text-4xl text-white font-bold leading-none"
				>
					devjobs
				</Link>
				<ThemeSwitcher />
			</div>
		</header>
	);
}

export default Header;
