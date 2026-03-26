export const Menu = () => {
	const title = "Nadpis";
	const list = ["Home", "About"];

	return (
		<div>
			<h1>{title}</h1>
			<ul>
				{list.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};
