import React, { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const togNavBar = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	let navToggle = isOpen ? "flex" : "hidden";

	return (
        <div className="">
            <div className="text-blue-950 w-full flex items-center justify-between sticky top-0 py-[10px] px-10 lg:py-[40px] bg-[#ECEDF1] lg:px-40">
                <a
                    href="/"
                    className="text-[28px] lg:text-[28px] font-normal font-['Monument Extended'] tracking-wide"
                >
                    vikasana
                </a>
                <div className="hidden md:flex lg:text-xl justify-between w-[60%] lg:w-[52%] font-semibold cursor-pointer">
                    <a href="/events" className="">
                        Events
                    </a>
                    <a className="">Members</a>
                    <a className="">Divisions</a>
                    <a href="/about" className="">
                        About
                    </a>
                    <a className="">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={togNavBar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            <div className={`h-[100vh] ${navToggle} bg-[#ECEDF1]`}>
                <div className="w-full text-4xl flex flex-col p-10">
                    <div className="w-full">
                        <a className="">Events</a>
                        <div className="bg-slate-400 w-full my-4 h-0.5"></div>
                    </div>
                    <div className="w-full">
                        <a className="">Members</a>
                        <div className="bg-slate-400 w-full my-4 h-0.5"></div>
                    </div>
                    <div className="w-full">
                        <a className="">Divisions</a>
                        <div className="bg-slate-400 w-full my-4 h-0.5"></div>
                    </div>
                    <div className="w-full">
                        <a className="">About</a>
                        <div className="bg-slate-400 w-full my-4 h-0.5"></div>
                    </div>
                    <div className="w-full">
                        <a className="">Contact</a>
                        <div className="bg-slate-400 w-full my-4 h-0.5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
