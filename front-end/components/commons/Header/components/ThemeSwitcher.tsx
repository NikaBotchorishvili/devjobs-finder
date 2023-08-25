"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef, MouseEvent, useEffect } from "react";

function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const checkboxRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (checkboxRef && checkboxRef.current && theme) {
			checkboxRef.current.checked = theme == "dark" ? true : false;
		}
	}, []);
	const variants = {
		initial: {
			left: theme == "dark" ? 32 : 5,
		},
		animate: {
			left: theme == "dark" ? 32 : 5,
		},
	};
	function handleClick(e: MouseEvent<HTMLElement>) {
		e.stopPropagation();
		if (checkboxRef && checkboxRef.current) {
			setTheme(checkboxRef.current.checked ? "dark" : "light");
		}
	}
	return (
		<div className="flex gap-x-2">
			<Image
				className="select-none"
				src="desktop/icon-sun.svg"
				width={25}
				height={20}
				alt="sun icon"
			/>
			<div className="relative w-[50px] h-[25px] bg-white rounded-xl cursor-pointer">
				<input
					ref={checkboxRef}
					type="checkbox"
					className="w-full h-full opacity-0 peer "
					onClick={handleClick}
				/>
				<motion.span
					key="toggler"
					onClick={handleClick}
					variants={variants}
					initial="initial"
					animate="animate"
					className={`h-[12.5px] peer-active:bg-lightViolet w-[12.5px] rounded-full bg-violet absolute top-1/2 -translate-y-1/2 pointer-events-none `}
				></motion.span>
			</div>
			<Image
				src="desktop/icon-moon.svg"
				width={20}
				height={12}
				alt="sun icon"
				className="select-none"
			/>
		</div>
	);
}

export default ThemeSwitcher;
