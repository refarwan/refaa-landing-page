import "./style.css";

import blob from "./blob.svg";
import Header from "./components/Header";
import graph from "./graph.svg";
import randomBlob from "./random-blob.svg";
import PricingItem from "./PricingItem";
import logoBlue from "./logo-blue.svg";

import {
	FaInstagram,
	FaLinkedin,
	FaLinkedinIn,
	FaWhatsapp,
} from "react-icons/fa";

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
			<div className="w-screen overflow-hidden h-[564px] absolute -z-50 right-0 top-[420px] sm:top-[320px]">
				<img
					src={randomBlob}
					alt="Random Blob"
					className="w-[558px] absolute top-0 -right-[100px] sm:-right-[200px] xl:left-[unset] xl:-right-[160px]"
				/>
			</div>

			<div
				id="about"
				className="bg-white/80 flex flex-col gap-[15px] px-[20px] py-[10px] items-center my-[30px] sm:p-[20px] sm:px-[70px] xl:w-[1200px] xl:mx-auto xl:bg-transparent xl:py-[60px] xl:px-[100px]"
			>
				<h2 className="font-semibold text-[20px]">ABOUT</h2>
				<p className="text-center text-gray-500">
					Di Refaa Technology Solutions, kami berdedikasi untuk membantu bisnis
					Anda mencapai potensi penuh melalui solusi ERP yang inovatif dan
					terintegrasi. Berawal dari visi untuk menghadirkan teknologi canggih
					yang mudah diakses dan digunakan oleh berbagai jenis usaha, kami telah
					berkembang menjadi mitra strategis bagi banyak perusahaan dalam
					mengoptimalkan operasional mereka. Tim kami terdiri dari para ahli
					teknologi berpengalaman yang berkomitmen untuk memberikan layanan
					terbaik dan solusi yang disesuaikan dengan kebutuhan spesifik bisnis
					Anda. Dengan pendekatan yang mengutamakan pelanggan, kami memastikan
					setiap solusi ERP yang kami kembangkan mampu meningkatkan efisiensi,
					produktivitas, dan daya saing perusahaan Anda. Refaa Technology
					Solutions berkomitmen untuk terus berinovasi dan memberikan nilai
					tambah melalui produk dan layanan kami. Bersama kami, wujudkan
					transformasi digital yang efektif dan berkelanjutan untuk masa depan
					bisnis yang lebih cerah
				</p>
			</div>

			<div
				id="pricing"
				className="bg-main-blue/20 my-[30px] px-[100px] pt-[60px] pb-[100px] flex flex-col items-center gap-[50px]"
			>
				<h2 className="font-semibold text-[20px]">PRICING</h2>
				<div className="flex flex-col justify-center gap-[40px] sm:flex-row sm:flex-wrap xl:flex-nowrap">
					<PricingItem
						title="Basic"
						feature={[
							"Mencatat barang masuk",
							"Mencatat barang keluar",
							"Mencatat hasil keuntungan",
						]}
						price="Rp 90.000 / bln"
					/>
					<PricingItem
						title="Business"
						feature={[
							"Mencatat barang masuk dan keluar",
							"Mencatat Keuntungan",
							"Dapat menganalisa hasil penjualan dengan CHART",
							"Support 7x24 Jam",
						]}
						price="Rp 300.000 / bln"
					/>
					<PricingItem
						title="Entrepreneur"
						feature={[
							"Mencatat barang masuk dan keluar",
							"Mencatat Keuntungan",
							"Dapat menganalisa hasil penjualan dengan CHART d. Support 7x24 Jam",
							"Export data ke Excel",
							"AI Prediksi penghasilan",
						]}
						price="Rp 750.000 / bln"
					/>
				</div>
			</div>

			<div
				id="contact"
				className="flex flex-col gap-[50px] items-center px-[30px] pb-[70px]"
			>
				<h2 className="font-semibold text-[20px]">CONTACT</h2>
				<div className="flex flex-col gap-[100px] xl:flex-row xl:justify-between">
					<div className="flex flex-col gap-[20px] xl:w-[398px]">
						<div className="text-main-blue font-semibold text-[40px] flex flex-row items-center gap-[10px]">
							<img
								src={logoBlue}
								alt="Logo blue"
								className="w-[40px] h-[40px]"
							/>
							REFAA
						</div>
						<div className="font-semibold text-[20px]">
							PT Refaa Technology Solutions
						</div>
						<div className="text-gray-500">
							Jln. Pajangan - Selarong, Butuh Lor, Triwidadi, Pajangan, Bantul,
							D.I. Yogyakarta 55751
						</div>
					</div>
					<div className="font-semibold flex flex-col gap-[10px]">
						<a
							className="flex flex-row items-center gap-[16px] hover:text-main-blue"
							href="https://www/linkedin.com"
						>
							<FaLinkedin size={25} /> PT Refaa Technology Solutions
						</a>
						<a
							className="flex flex-row items-center gap-[16px] hover:text-main-blue"
							href="https://www.instagram.com"
						>
							<FaInstagram size={25} /> @refaa.tech
						</a>
						<a
							className="flex flex-row items-center gap-[16px] hover:text-main-blue"
							href="https://www.whatsapp.com"
						>
							<FaWhatsapp size={25} /> 0877 6765 5426
						</a>
					</div>
				</div>
			</div>

			<div className="w-full border-t-[1px] text-center p-[10px]">
				<span className="text-[12px] text-gray-500 sm:text-[16px]">
					2024 Refaa Technology Solutions. All right reserved.
				</span>
			</div>
		</>
	);
}

export default App;
