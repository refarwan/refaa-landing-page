import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

type PopupShowProps = {
	type: "message" | "success" | "error" | "custom";
	force?: boolean;
	message?: string;
	customComponent?: ReactNode;
	additionalCallback?: () => void;
};

type Popup = {
	open(props: PopupShowProps): void;
	close(): void;
};

const popup = createContext<null | Popup>(null);

const PopupProvider = ({ children }: { children: ReactNode }) => {
	const [popupState, setPopupState] = useState<null | PopupShowProps>(null);
	const [popupVisible, setPopupVisible] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const open = (props: PopupShowProps) => {
		setPopupState(props);
		setPopupVisible(true);
	};

	const close = () => {
		setPopupVisible(false);
		setTimeout(() => {
			if (popupState?.additionalCallback) popupState.additionalCallback();
			setPopupState(null);
		}, 200);
	};

	useEffect(() => {
		if (popupVisible === true)
			setTimeout(() => {
				if (buttonRef.current) buttonRef.current.focus();
			}, 200);
	}, [popupVisible]);

	return (
		<popup.Provider value={{ open, close }}>
			{popupState ? (
				<div
					onClick={close}
					className={`bg-slate-500/40 w-screen h-screen top-0 left-0 z-40 fixed ${
						popupVisible
							? "animate-popup-hover-show"
							: "animate-popup-hover-hide"
					}`}
				>
					<div
						onClick={(event) => {
							event.stopPropagation();
						}}
						className={`bg-white w-max min-w-[300px] max-w-[300px] p-[25px] rounded-sm block m-auto sm:max-w-[600px] xl:max-w-[1000px] ${
							popupVisible ? "animate-popup-show" : "animate-popup-hide"
						}`}
					>
						{popupState.type === "custom" ? (
							popupState.customComponent
						) : (
							<>
								{popupState.type !== "message" ? (
									popupState.type === "success" ? (
										<FaCheckCircle
											size={50}
											className="fill-main-blue block mx-auto mb-[10px]"
										/>
									) : (
										<FaExclamationCircle
											size={50}
											className="fill-red-700 block mx-auto mb-[10px]"
										/>
									)
								) : null}

								<p className="text-center">{popupState.message}</p>
								<button
									ref={buttonRef}
									onClick={close}
									className="bg-main-blue focus:outline-sky-300 focus:ring-4 text-white h-[40px] w-[150px] rounded-sm m-auto mt-[30px] block"
								>
									Oke
								</button>
							</>
						)}
					</div>
				</div>
			) : null}
			{children}
		</popup.Provider>
	);
};

export default PopupProvider;

export const usePopup = () => {
	return useContext(popup) as Popup;
};
