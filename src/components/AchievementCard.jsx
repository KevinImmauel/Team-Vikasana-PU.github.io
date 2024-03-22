import React from "react";

export default function AchievementCard({ src, title, year }) {
	return (
		<div className="bg-white  rounded-3xl py-5 px-[23px] w-96 grid gap-y-4 border border-[#788DBA80] scale-95">
			<img
				className="bg-[#B8D7FF] rounded-2xl h-[300px] w-[400px] object-cover object-center"
				src={src}
				alt="DDRobocon"
			/>
			<div className="grid gap-y-2">
				<div>
					<p className="text-wrap leading-7 text-primary-0 font-medium font-inter text-2xl">
						{title}
					</p>
					<p className="text-primary-0 opacity-60 font-medium font-inter text-lg">
						{year}
					</p>
				</div>
				<a href="#">
					<button className="py-2 px-8 border-2 w-fit h-fit rounded-3xl border-primary-0 text-primary-0 text-lg font-medium font-inter">
						Read More
					</button>
				</a>
			</div>
		</div>
	);
}
