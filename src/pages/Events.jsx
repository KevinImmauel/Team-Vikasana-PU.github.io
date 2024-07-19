import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCarausel from "../components/EventCarausel";
import EventCard from "../components/EventCard";

//For expired events initialize the expired key to true
//No need to mention the key for active events

const eventList = [
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 25 ",
        time: "3:00 PM - 5:00 PM IST",
    },
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 26 ",
        time: "3:00 PM - 5:00 PM IST",
    },
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 27 ",
        time: "3:00 PM - 5:00 PM IST",
        expired: true,
    },
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 2 ",
        time: "3:00 PM - 5:00 PM IST",
        expired: true,
    },
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 6 ",
        time: "3:00 PM - 5:00 PM IST",
        expired: true,
    },
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 7 ",
        time: "3:00 PM - 5:00 PM IST",
        expired: true,
    },
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 28 ",
        time: "3:00 PM - 5:00 PM IST",
    },
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 29 ",
        time: "3:00 PM - 5:00 PM IST",
    },
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 30 ",
        time: "3:00 PM - 5:00 PM IST",
        expired: true,
    },
    {
        imgSrc: "./EventPosters/Instagram post - 1.png",
        eventName: "HackTheBox - Cybersecurity event",
        eventDesc:
            "Embark on your web development journey with CS404 – an workshop series by Team Vikasana at Presidency University.",
        date: "Fri, Apr 17th, 31 ",
        time: "3:00 PM - 5:00 PM IST",
    },
];

const createCard = (props) => {
    return <EventCard {...props} />;
};

const active = eventList.filter((props) => !props.expired).map(createCard);
const expired = eventList.filter((props) => props.expired).map(createCard);

export default function Events() {
    return (
        <section className="bg-[#ECEDF1]">
            <Navbar />
            <div>
                <h1 className="px-[14vw]  sm:max-2xl:text-left font-inter font-bold text-4xl sm:max-2xl:text-6xl text-primary-0 text-center">
                    Ongoing Events
                </h1>
                <EventCarausel data={active} />

                <h1 className="px-[14vw] sm:max-2xl:text-left font-inter font-bold text-4xl sm:max-2xl:text-6xl text-primary-0 text-center">
                    Completed Events
                </h1>
                <EventCarausel data={expired} />
            </div>
            <Footer />
        </section>
    );
}
