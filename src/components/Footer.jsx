import React from "react";
import { Facebook, Instagram, Twitter, Github, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <div className="w-full bg-blue-950 sm:grid sm:grid-rows-4 sm:grid-cols-5 text-[#fff] py-[10px] px-10 sm:px-[160px] sm:py-[40px]">
            <div className="text-3xl sm:row-span-4 sm:col-span-3 my-10">Vikasana</div>
            <div className="w-full sm:col-span-2 sm:row-span-4 flex justify-between">
                <div className="sm:row-span-3 sm:col-span-1  grid grid-rows-5 sm:gap-2">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Services</p>
                    <p>Our Team</p>
                </div>
                <div className=":row-span-3 sm:col-span-1 grid grid-rows-5 sm:gap-2">
                    <p>Events</p>
                    <p>Our Blog</p>
                    <p>Divisions</p>
                    <p>Workshops</p>
                    <p>Sponsors</p>
                </div>
            </div>
            <div className="sm:row-span-1 sm:col-span-5 flex justify-between items-center w-full sm:mt-10 mt-4 pt-4 sm:pt-10 border-t-2 border-slate-600">
                <p>© 2024 Vikasana Tech. All Rights Reserved.</p>
                <div className="grid grid-cols-5 gap-2">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Github />
                    <Globe />
                </div>
            </div>
        </div>
    )
}