import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MembersComp from "../components/MembersComp";

export default function MembersPage() {
    return (
        <div className="bg-[#ECEDF1]">
            <Navbar />
            <MembersComp />
            
            <Footer />
        </div>
    )
}