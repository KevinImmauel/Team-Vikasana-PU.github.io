import React from "react";
import AchievementCard from "../components/AchievementCard";

export default function Achievements() {
    
    const items=[
        {year:2022, title:"Indian Ranking 19 in DD Robocon hosted in IIT Delhi", src:"/AchievementsImages/DDRobocon.png"},
        {year:2022, title:"Indian Ranking 19 in DD Robocon hosted in IIT Delhi", src:"/AchievementsImages/post2.png"},
        {year:2022, title:"Indian Ranking 19 in DD Robocon hosted in IIT Delhi", src:"/AchievementsImages/group.png"},
        {year:2022, title:"Indian Ranking 19 in DD Robocon hosted in IIT Delhi", src:"/AchievementsImages/post2.png"},
    ];
    return (
        <section className="bg-[#ECEDF1] flex-col h-full w-full px-[20%] ">
            <p className="font-inter font-bold text-4xl sm:max-2xl:text-6xl text-primary-0 py-6 text-wrap">Our Achievements</p>
            <div className="flex flex-row gap-10 flex-wrap flex-shrink-0 justify-evenly">
            {items.map((item)=>(
                <AchievementCard year={item.year} src={item.src} title={item.title} />))}
            </div>
        </section>
    );
}