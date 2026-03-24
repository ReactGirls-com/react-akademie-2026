export const List = () => {
	const menu = ["Úvod", "O nás", "Článek", "Kontakt"];

	return (
		<ul>
			{menu.map((menuItem) => (
				<li>{menuItem}</li>
			))}
		</ul>
	);
};
