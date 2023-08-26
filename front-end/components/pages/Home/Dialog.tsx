"use client";

import { faFilter, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEvent, useEffect, useRef } from "react";
import CheckBox from "./CheckBox";
function Dialog() {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const filterIconRef = useRef<SVGSVGElement | null>(null);
	const onClose = () => {
		if (dialogRef && dialogRef.current) {
			dialogRef.current.close();
		}
	};

	const onOpen = () => {
		if (dialogRef && dialogRef.current) {
			dialogRef.current.showModal();
		}
	};
	useEffect(() => {
		if (dialogRef && dialogRef.current) {
			dialogRef.current.close();
		}
		//  this doesn't work as expected

		const handler = (e: Event): void => {
			const mouseEvent = e as unknown as MouseEvent<HTMLElement>

			if(dialogRef && dialogRef.current) {
				if(dialogRef.current == mouseEvent.target as Node){
					onClose();
				}
			}
		} 
		window.addEventListener("click", handler);

		return () => {
			window.removeEventListener("click", handler);
		};
	}, []);
	
	return (
		<>
			<FontAwesomeIcon
				icon={faFilter}
				onClick={onOpen}
				height={20}
				width={20}
				className="sm:hidden block"
				ref={filterIconRef}
			/>
			<dialog
				ref={dialogRef}
				className="dark:bg-veryDarkBlue w-[300px] rounded-lg p-5 backdrop:bg-midnight backdrop:bg-opacity-40 "
			>
				<form method="GET" >
					<div className="flex flex-col gap-y-8">
						<div className="relative">
							<FontAwesomeIcon
								className="sm:block text-violet h-[20px] select-none absolute top-1/2 -translate-y-1/2 left-0"
								icon={faLocationPin}
							/>
							<input
								className=" dark:bg-veryDarkBlue  py-3 px-6 text-ellipsis text-sm focus:outline-none border-b border-b-darkGrey sm:hidden flex"
								placeholder="Filter by location…"
								type="text"
								name="location"
							/>
						</div>
						<CheckBox className="inline"/>
						<button className="active:bg-lightViolet text-white  bg-violet py-3 rounded-md">
							<span className="">Search</span>
						</button>
					</div>
				</form>
			</dialog>
		</>
	);
}

export default Dialog;
