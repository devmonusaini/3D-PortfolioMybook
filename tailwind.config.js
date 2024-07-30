/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#f98e2b",
				secondary: "#f3f3f3",
			},
			boxShadow: {
				"custom-inset": "inset 0 0 8px rgba(0, 0, 0, 0.6)",
				custom: "12px 12px 14px rgba(0, 0, 0, 0.9)",
			},
		},
	},
	plugins: [],
};
