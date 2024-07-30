import MyBook from "./components/MyBook";
import BgTextture from "./assets/brown-wood-floring.jpg";

const BgTextturestyle = {
	backgroundImage: `url(${BgTextture})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
	width: "100%",
	margin: 0,
	padding: 0,
};
function App() {
	return (
		<>
			<div
				style={BgTextturestyle}
				className="w-full h-full flex justify-center items-center  "
			>
				<MyBook />
			</div>
		</>
	);
}

export default App;
