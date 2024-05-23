import { useState } from "react";

import logo from "../logo.svg";

import { FaBars } from "react-icons/fa";
import { usePopup } from "./Popup";

const Header = () => {
	const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
	const popup = usePopup();

	return (
		<header className="px-[12px] py-[10px] flex justify-between xl:py-[20px] xl:px-[30px]">
			<a
				href="/"
				className="text-white font-bold flex gap-[4px] items-center xl:gap-[10px]"
			>
				<img src={logo} alt="Logo Refaa" className="h-[20px] xl:h-[30px]" />
				<span className="font-semibold text-[20px] xl:text-[30px]">REFAA</span>
			</a>
			<div
				className={
					`fixed w-screen h-screen bg-gray-800/40 left-0 top-0 transition-all sm:visible sm:relative sm:h-auto sm:w-auto` +
					(menuIsActive ? " visible" : " invisible")
				}
				onClick={() => {
					setMenuIsActive(false);
				}}
			>
				<div
					className={
						`bg-white h-screen w-[290px] p-[20px] flex flex-col justify-between transition-all relative sm:left-0 sm:h-auto sm:flex-row sm:gap-[20px] sm:w-max` +
						(menuIsActive ? " left-0" : " -left-[290px]")
					}
					onClick={(event) => {
						event.stopPropagation();
					}}
				>
					<nav className="flex flex-col gap-[10px] sm:flex-row sm:gap-[20px] xl:text-[20px]">
						<a className="font-semibold hover:text-main-blue" href="#about">
							ABOUT
						</a>
						<a className="font-semibold hover:text-main-blue" href="#pricing">
							PRICING
						</a>
						<a className="font-semibold hover:text-main-blue" href="#contact">
							CONTACT
						</a>
					</nav>
					<button
						onClick={() => {
							popup.open({
								type: "success",
								message: "Horee",
							});
						}}
						className="block bg-main-blue w-full text-white h-[40px] rounded-md font-semibold hover:text-white hover:bg-main-blue sm:bg-white sm:text-main-blue sm:border sm:border-main-blue sm:px-[16px] sm:h-[26px] xl:h-[30px] xl:px-[24px]"
					>
						LOGIN
					</button>
				</div>
			</div>
			<button
				className=" sm:hidden"
				onClick={() => {
					setMenuIsActive(!menuIsActive);
				}}
			>
				<FaBars className="fill-main-blue" size={25} />
			</button>
		</header>
	);
};

export default Header;
