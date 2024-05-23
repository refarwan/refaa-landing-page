/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/*.tsx", "src/components/*.tsx"],
	theme: {
		extend: {
			colors: {
				"main-blue": "#41B0FA",
			},
		},
	},
	plugins: [],
};
