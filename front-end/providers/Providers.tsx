"use client";
import ContextProvider from "@/context/DataContext";
import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class">
			<ContextProvider>
				{children}
			</ContextProvider>
		</ThemeProvider>
	);
}

export default Providers;
