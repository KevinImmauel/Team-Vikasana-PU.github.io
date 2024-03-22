import React from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import About from "./components/About"

export default function App() {
	return (
		<div className="bg-[#ECEDF1]">
			<Navbar />
			<About />
			<Footer />
		</div>
	);
}
