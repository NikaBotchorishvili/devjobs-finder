import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: "#FFFFFF",
			lightGrey: "#F4F6F8",
			gray: "#9DAEC2",
			darkGrey: "#6E8098",
			violet: "#5964E0",
			lightViolet: "#939BF4",
			veryDarkBlue: "#19202D",
			midnight: "#121721",
		},
		extend: {},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
