// První způsob - použijeme podmínku if
// Vrátíme null, pokud je pole prázdné, jinak vrátíme seznam

/*export const List = () => {
	const listOfNumbers = [];

	if (listOfNumbers.length === 0) {
		return null;
	}

	return (
		<ul>
			{listOfNumbers.map((number) => (
				<li key={number}>{number}</li>
			))}
		</ul>
	);
};*/

// Druhý způsob - použijeme ternární operátor
// Vrátíme null, pokud je pole prázdné, jinak vrátíme seznam

/*export const List = () => {
	const listOfNumbers = [];

	return listOfNumbers.length === 0 ? null : (
		<ul>
			{listOfNumbers.map((number) => (
				<li key={number}>{number}</li>
			))}
		</ul>
	);
};*/

// Třetí způsob - použijeme logický operátor &&
// Vrátíme pole, pokud není prázdné, jinak nevracíme nic

export const List = () => {
	const listOfNumbers = [1, 2, 3, 4, 5];

	return (
		listOfNumbers.length !== 0 && (
			<ul>
				{listOfNumbers.map((number) => (
					<li key={number}>{number}</li>
				))}
			</ul>
		)
	);
};
