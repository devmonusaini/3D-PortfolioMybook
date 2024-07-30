import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import coverImg from "../assets/cover.png";
import Cover from "./pages/cover/Cover";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
function MyBook(props) {
	return (
		<HTMLFlipBook width={600} height={700} showCover="true">
			<Page number={1}>
				<div className="demoPage text-white text-3xl">Page 1</div>
				<Cover coverImg={coverImg} title="My Portfolio" />
			</Page>
			<Page number={2}>
				<FirstPage />
			</Page>
			<Page number={3}>
				<Skills />
			</Page>

			<Page number={4}>
				<Services />
			</Page>
			<Page number={5}>
				<About />
			</Page>
			<Page number={6}>
				<About />
			</Page>
			<Page number={7}>
				<About />
			</Page>
			<Page number={8}>
				<About />
			</Page>
		</HTMLFlipBook>
	);
}

export default MyBook;
