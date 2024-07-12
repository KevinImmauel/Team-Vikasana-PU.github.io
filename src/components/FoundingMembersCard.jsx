import React from "react";

export default function FoundingMembersCard({ src, name, title, division, linkedin, github }) {
	return (
		
			<div className="grid gap-y-2 h-[490px] w-[352px]">
                <div className="bg-white  rounded-3xl py-5 px-[23px] w-96 grid gap-y-4 border border-[#788DBA80] scale-95">
			        <img
				        className="bg-[#B8D7FF] rounded-2xl h-[304px] w-[328px] object-cover object-center"
				        src={src}
				        alt="img1"
			        />
				<div>
					<p className="text-wrap leading-7 text-primary-0 font-bold font-inter text-2xl text-center">
						{name}
					</p>
					<p className="text-primary-0 font-medium font-inter text-lg text-center">
						{title}
					</p>
                    <p className="text-primary-0 opacity-60 font-medium font-inter text-lg text-center">
						{division}
					</p>
				</div>
                <div className="flex flex-row gap-5 justify-center">
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
