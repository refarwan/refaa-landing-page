import "./style.css";

import blob from "./blob.svg";
import Header from "./components/Header";
import graph from "./graph.svg";
import randomBlob from "./random-blob.svg";

function App() {
	return (
		<>
			<img
				src={blob}
				alt="blob"
				className="w-[207px] absolute -z-50 -left-[58px] -top-[122px] sm:w-[280px] sm:-left-[64px] sm:-top-[162px] xl:w-[375px] xl:-left-[104px] xl:-top-[220px]"
			/>
			<Header />
			<div className="w-full my-[30px] flex flex-col gap-[20px] px-[30px] py-[50px] items-center sm:flex-row sm:py-[100px] sm:px-[70px] xl:px-0 xl:justify-center xl:items-start">
				<img src={graph} alt="graph" className="w-[300px] xl:w-[578px]" />
				<p className="text-center xl:w-[500px]">
					Selamat datang di Refaa Technology Solutions! Kami siap membantu
					bisnis Anda dengan aplikasi ERP yang membuat kerja jadi lebih mudah
					dan efisien.
				</p>
			</div>
			<img
				src={randomBlob}
				alt="Random Blob"
				className="w-[558px] absolute top-[425px] left-[70px] -z-50 sm:top-[312px] sm:left-[395px] xl:left-[unset] xl:-right-[160px] xl:top-[251px]"
			/>
		</>
	);
}

export default App;
