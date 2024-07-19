import React from "react";
import FoundingMembersCard from "./FoundingMembersCard";

export default function MembersRobotics() {
    const items = [
        {
            name: "Mihir",
            title: "Head of Onyx",
            src: "/FoundersImages/Frame-106.png",
            division: "Onyx Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Mihir",
            title: "Head of Onyx",
            src: "/FoundersImages/Frame-106.png",
            division: "Onyx Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Mihir",
            title: "Head of Onyx",
            src: "/FoundersImages/Frame-106.png",
            division: "Onyx Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Mihir",
            title: "Head of Onyx",
            src: "/FoundersImages/Frame-106.png",
            division: "Onyx Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Mihir",
            title: "Head of Onyx",
            src: "/FoundersImages/Frame-106.png",
            division: "Onyx Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
        {
            name: "Mihir",
            title: "Head of Onyx",
            src: "/FoundersImages/Frame-106.png",
            division: "Onyx Division",
            linkedin: "calc: https://calcnish.netlify.app/",
            github: "calc: https://calcnish.netlify.app/",
        },
    ];
    return (
        <section className="bg-[#ECEDF1] flex-col h-full w-full px-[10%] ">
			<p className="font-inter font-bold text-4xl sm:max-2xl:text-6xl text-primary-0 py-6 text-wrap">
				Members
			</p>
            <div className="flex flex-row gap-10 flex-wrap flex-shrink-0 justify-evenly">
				{items.map((item, index) => (
					<FoundingMembersCard
						key={index}
						name={item.name}
                        src={item.src}
						title={item.title}
                        division={item.division}
                        linkedin={item.linkedin}
                        github={item.github}
					/>
				))}
			</div>
		</section>
    );
}