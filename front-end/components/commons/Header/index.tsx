import ThemeSwitcher from "./components/ThemeSwitcher";

function Header() {
	return (
		<header className="flex w-[screen] md:h-[160px] mobileHeader h-[136px] md:desktopHeader">
			<div className="flex w-[70%] justify-between mx-auto items-start pt-5 sm:pt-0   sm:items-center">
				<h1 className="text-4xl text-white font-bold leading-none">devjobs</h1>
				<ThemeSwitcher />
				
			</div>
		</header>
	);
}

export default Header;
