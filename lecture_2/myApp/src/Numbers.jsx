// První způsob - nejdříve filtrovat, potom mapovat

/*export const Numbers = () => {
 	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 	const filtered = numbers.filter((n) => n < 6);
 	return (
 		<ul>
 			{filtered.map((number) => {
 				return <li key={number}>{number}</li>;
 			})}
 		</ul>
 	);
 };*/

// Druhý způsob - metody skládáme za sebou

export const Numbers = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<ul>
			{numbers
				.filter((n) => n < 6)
				.map((number) => {
					return <li key={number}>{number}</li>;
				})}
		</ul>
	);
};
