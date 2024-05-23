type Props = {
	title: string;
	feature: string[];
	price: string;
};

const PricingItem = ({ title, feature, price }: Props) => {
	return (
		<div className="bg-white w-[300px] h-[500px] rounded-md flex flex-col justify-between items-center p-[30px] shadow-[0_0_10px_1px_rgba(0,0,0,.25)]">
			<h3 className="font-semibold text-[30px]">{title}</h3>
			<ul className="flex flex-col items-center gap-[15px] text-gray-500">
				{feature.map((item, index) => (
					<li key={index} className="text-center">
						{item}
					</li>
				))}
			</ul>
			<span className="text-main-blue">{price}</span>
		</div>
	);
};

export default PricingItem;
