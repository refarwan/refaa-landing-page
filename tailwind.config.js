/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/*.tsx", "src/components/*.tsx"],
	theme: {
		extend: {
			colors: {
				"main-blue": "#09B7FF",
			},
			keyframes: {
				"popup-hover-show": {
					from: { visibility: "hidden", opacity: "0" },
					to: { visibilty: "visible", opacity: "1" },
				},

				"popup-hover-hide": {
					from: { visibilty: "visible", opacity: "1" },
					to: { visibility: "hidden", opacity: "0" },
				},

				"popup-show": {
					from: { transform: "translateY(-120%)" },
					to: { transform: "translateY(20%)" },
				},

				"popup-hide": {
					from: { transform: "translateY(20%)" },
					to: { transform: "translateY(-120%)" },
				},
			},
			animation: {
				"popup-hover-show": "popup-hover-show .2s forwards",
				"popup-hover-hide": "popup-hover-hide .2s forwards",
				"popup-show": "popup-show .2s forwards",
				"popup-hide": "popup-hide .2s forwards",
			},
		},
	},
	plugins: [],
};
