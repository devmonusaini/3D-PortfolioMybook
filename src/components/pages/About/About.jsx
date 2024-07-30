import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const About = () => {
	return (
		<div className="h-full page-shadow bg-white p-10">
			{/* heading */}
			<div className="flex flex-col items-center">
				<h1 className="inline-block text-3xl  text-center font-bold mb-3 border-bottom-2 border-primary pb-1">
					About
				</h1>
				<p className=" text-center text-sm text-slate-500 md:w-[80%] mx-auto">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates rem voluptatem, quos incidunt consequuntur dolores dolor
					placeat quo omnis!
				</p>
			</div>
			{/* details */}
			<div className="mt-10 text-slate-500">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
					adipisci accusamus nam saepe odio beatae earum fugiat quis, maxime est
					dolorum. Magnam, amet?
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis
					consectetur ullam temporibus tempora, distinctio obcaecati quae totam.
				</p>
				{/* social link */}
				<div className=" flex space-x-4 mt-10 ">
					<MdFacebook className="social-btn" />
					<AiFillInstagram className="social-btn" />
					<AiFillGithub className="social-btn" />
					<AiFillLinkedin className="social-btn" />
				</div>
				{/* button link
				 */}
				<div className=" flex space-x-4 mt-10 ">
					<a href="#" className="primary-btn ">
						{" "}
						Download resume{" "}
					</a>
					<a href="#" className="outline-btn ">
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
