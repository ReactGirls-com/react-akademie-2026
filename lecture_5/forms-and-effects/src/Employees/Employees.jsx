import { useEffect, useState } from "react";
import data from "../data.json";

export const Employees = () => {
	const [listOfEmployees, setListOfEmployees] = useState([]);

	useEffect(() => {
		// Zde si eslint stezuje na synchronni pouziti setState v ramci useEffect.
		// To je spravne a je to zpusobene nasim umelym prikladem. Jde o to, ze kdyby
		// useEffect zavisel na hodnote, kterou nastavujeme pomoci setState, mohlo by
		// dojit k nekonecne smycce (v ramci useEffect nastavime novou hodnotu, ktera
		// zpusobi re-render a provolani useEffectu, cimz se znovu nastavi nova hodnota atd.)
		// V priklad na statni svatky uz to neuvidime.
		setListOfEmployees(data);
	}, []);

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Jmeno</th>
				</tr>
			</thead>
			<tbody>
				{listOfEmployees.map((row) => (
					<tr key={row.id}>
						<td>{row.id}</td>
						<td>{row.firstName}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
