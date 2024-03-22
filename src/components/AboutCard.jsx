import React from "react";

export default function AboutCard({
	name,
	imgsrc,
	role,
	division,
	linkedin,
	github,
}) {
	return (
		<div className="bg-white  rounded-2xl py-4 px-3 h-[490px] w-fit grid gap-y-4 border border-[#788DBA80]">
			<div className="flex flex-col items-center justify-between">
				<img
					className="bg-[#B8D7FF] rounded-lg h-72 w-80 object-cover object-center"
					src={imgsrc}
					alt="image"
				/>
				<div className=" flex flex-col items-center">
					<p className="font-Inter font-bold text-3xl text-primary-0">{name}</p>
					<p className="font-Inter font-medium text-lg text-primary-0 opacity-60">
						{role}
					</p>
					<p className="font-Inter font-medium text-lg text-primary-0 opacity-40">
						{division}
					</p>
				</div>
				<div className="flex flex-row gap-5">
					<a href={linkedin}>
						<button>
							<img src="/socialmedia/linkedin.svg" />
						</button>
					</a>
					<a href={github}>
						<button>
							<img src="/socialmedia/github.svg" />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
