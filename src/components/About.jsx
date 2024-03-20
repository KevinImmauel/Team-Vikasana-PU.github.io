import React from "react";
import { Instagram, Volume2 } from 'lucide-react';
import Button from "./Button";

export default function About() {
    return (
        <div className="px-10 lg:py-[40px] lg:px-[256px]">
            <div className="text-blue-950">
                <h1 className=" font-bold text-[80px] ">Vikasana</h1>
                <div className="flex items-center">
                <p className="font-medium text-2xl mr-6">/ Student R&D team  of Presidency University /</p> <Volume2 size={32} />
                </div>
                <p className="text-xl font-medium"><i>NOUN</i></p>
            </div>
            <p className="font-medium leading-7 text-xl mt-[20px] mb-[40px] text-slate-500">Driven by curiosity and guided by Presidency University's esteemed Research & Innovation department, we're a student team building real-world robots. More than just competition bots, we create learning experiences for our university and proudly represent it at conferences across India and beyond. Our passion lies in research, innovation, and tackling engineering challenges. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together.</p>
            <Button content={"Send a Message"} icon={<Instagram size={32}/>} />
        </div>
    )
}