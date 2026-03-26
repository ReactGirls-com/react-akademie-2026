export const Colors = () => {
	const colors = ["red", "green", "blue", "yellow", "orange"];

	return (
		<ul>
			{colors.map((color) => {
				return (
					<li className={color} key={color}>
						{color}
					</li>
				);
			})}
		</ul>
	);
};
