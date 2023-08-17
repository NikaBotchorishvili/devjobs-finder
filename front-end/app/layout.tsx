import Providers from "@/providers/Providers";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/commons/Header";
import { Kumbh_Sans } from "next/font/google";

const kumbhSans = Kumbh_Sans({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "devjobs finder",
	description: "Created by @Nika Botchorishvili",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={kumbhSans.className+ " dark:bg-midnight overflow-x-hidden"}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
