import React from "react";

const Cover = ({ coverImg, title }) => {
	const coverImgstyle = {
		backgroundImage: `url(${coverImg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
	};
	return (
		<div className="h-full bg-black" style={coverImgstyle}>
			<div className="h-full  flex justify-center  items-center  ">
				<h1 className="text-primary text-5xl  font-bold font-outline-2">
					{title}
				</h1>
			</div>
		</div>
	);
};

export default Cover;
