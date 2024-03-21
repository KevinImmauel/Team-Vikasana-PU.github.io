/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			fontFamily: {
				inter : ['Inter','sans-serif'],
				sfprodisplay : ['SF Pro Display','sans-serif'],
			},
			colors: {
				primary : ['#20294C']
			}
		},
	},
	plugins: [],
};
