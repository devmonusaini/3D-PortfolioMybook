import React from "react";
import personImg from "../../../assets/person.png";
const FirstPage = () => {
	return (
		<div className="h-full">
			<main className="h-full w-full  bg-secondary page-shadow">
				<div className="px-10 space-y-4">
					<img src={personImg} className="w-[500px] mx-auto" alt="" srcset="" />
				</div>
				<div>
					<div className="px-10 space-y-3">
						<p className="uppercase">Hello </p>
						<p className="text-4xl md:text-6xl font-bold text-black/80 ">
							I'm Alex
						</p>
						<p className="text-black/75 text-left">Full stack Devloper</p>
						<p className="text-black/75 ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
							veniam repudiandae accusamus aut voluptatibus ipsum assumenda! Non
							sit molestiae qui eaque nihil fuga.
						</p>
						<a href="" className="primary-btn">
							Email
						</a>
					</div>
				</div>
			</main>
		</div>
	);
};

export default FirstPage;
