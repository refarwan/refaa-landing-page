import "./style.css";

import blob from "./blob.svg";
import Header from "./components/Header";

function App() {
	return (
		<>
			<img
				src={blob}
				alt="blob"
				className="w-[207px] absolute -z-50 -left-[58px] -top-[122px] sm:w-[280px] sm:-left-[64px] sm:-top-[162px] xl:w-[375px] xl:-left-[104px] xl:-top-[220px]"
			/>
			<Header />
		</>
	);
}

export default App;
