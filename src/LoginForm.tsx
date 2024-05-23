import { FormEvent, useRef } from "react";
import { usePopup } from "./components/Popup";

const LoginForm = () => {
	const refUsername = useRef<HTMLInputElement>(null);
	const popup = usePopup();
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		popup.close();
		setTimeout(() => {
			popup.open({
				type: "success",
				message: `Wellcome ${refUsername.current?.value}`,
			});
		}, 200);
	};
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
			<h1 className="font-semibold text-center">Login</h1>
			<input
				type="text"
				placeholder="Username"
				ref={refUsername}
				className="block border-b-2 border-gray-500 h-[40px] px-[16px] outline-none"
			/>
			<input
				type="password"
				placeholder="password"
				className="block border-b-2 border-gray-500 h-[40px] px-[16px] outline-none"
			/>
			<div className="flex flex-row gap-[10px] justify-center">
				<button
					onClick={() => {
						popup.close();
					}}
					type="button"
					className="bg-red-800 text-white h-[40px] w-[150px] rounded-md"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="bg-main-blue text-white h-[40px] w-[150px] rounded-md"
				>
					Login
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
