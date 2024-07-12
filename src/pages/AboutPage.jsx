import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import TeamsComp from "../components/TeamsComp";
import MisVis from "../components/MisVis";
import FoundingMembers from "../components/FoundingMembers";
import FoundingMembersCard from "../components/FoundingMembersCard";

export default function AboutPage() {
    return (
        <div className="bg-[#ECEDF1]">
            <Navbar />
            <About />
            <TeamsComp />
            <MisVis head={"Mission"}
                content={"Driven by curiosity and guided by Presidency University's esteemed Research & Innovation department, we're a student team building real-world robots. More than just competition bots, we create learning experiences for our university and proudly represent it at conferences across India and beyond. Our passion lies in research, innovation, and tackling engineering challenges. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together."}
            />
            <MisVis head={"Vision"}
                content={"Driven by curiosity and guided by Presidency University's esteemed Research & Innovation department, we're a student team building real-world robots. More than just competition bots, we create learning experiences for our university and proudly represent it at conferences across India and beyond. Our passion lies in research, innovation, and tackling engineering challenges. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together."}
            />
            <FoundingMembers/>
            <FoundingMembersCard/>
            <Footer />
        </div>
    )
}