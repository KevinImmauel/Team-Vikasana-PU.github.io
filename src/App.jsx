import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Achievements from "./components/Achievements";

export default function App() {
	return (
		<div className="bg-[#ECEDF1]">
			<Navbar />
			<About />
			<Achievements />
			<Footer />
		</div>
	);
}
