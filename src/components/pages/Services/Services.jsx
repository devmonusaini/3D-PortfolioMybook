import React from "react";
import ServicesBox from "./ServicesBox";

const Services = () => {
	return (
		<div className="h-full page-shadow bg-white p-10">
			{/* heading */}
			<div className="flex flex-col items-center">
				<h1 className="inline-block text-3xl  text-center font-bold mb-3 border-bottom-2 border-primary pb-1">
					Services
				</h1>
				<p className=" text-center text-sm text-slate-500 md:w-[80%] mx-auto">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates rem voluptatem, quos incidunt consequuntur dolores dolor
					placeat quo omnis!
				</p>
			</div>
			{/* service card */}
			<div>
				<ServicesBox />
			</div>
		</div>
	);
};

export default Services;
