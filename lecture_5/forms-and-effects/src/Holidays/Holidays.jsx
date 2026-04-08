import { useState, useEffect } from "react";
import { Loader } from "../Loader/Loader.jsx";

const currentYear = new Date().getFullYear();
const numberOfLastYears = 10;

// Toto muze byt trochu magicke. Nicmene nejde o nic jineho nez o vytvoreni pole delky 10.
// Je to vlastne for cyklus, ve kterem vezmeme aktualni rok a odecteme cislo iterace. Tim dostaneme roky 2026-2017
// Zpusobu jak tohoto dosahnout je mnoho.
const years = Array.from({ length: numberOfLastYears }, (_, i) => currentYear - i);

// Pokrocilejsi verze statnich svatku s moznosti vyberu roku
export const Holidays = () => {
	const [holidays, setHolidays] = useState([]);
	const [selectedYear, setSelectedYear] = useState(years[0]);

	useEffect(() => {
		// Je dobre vzdy zajistit, ze hodnoty, ktere potrebuji pouzit, existuji a maji spravne hodnoty,
		// Proto radeji kontrolujeme, ze selectedYear neni neprazdny
		if (!selectedYear) {
			return;
		}

		const fetchAndSetHolidays = async () => {
			const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${selectedYear}/CZ`);

			// Vsimnete si, ze zde si eslint nestezuje na pouziti setState v useEffect
			setHolidays(await response.json());
		};

		fetchAndSetHolidays();
	}, [selectedYear]);

	// Handler zmeny roku, diky kteremu muzeme nejenom nastavit hodnotu vybraneho roku,
	// ale take vynuloval stazene svatky. Tim mimo jine dosahneme toho, ze se zobrazi Loader
	const handleSetSelectedYear = (e) => {
		setSelectedYear(e.target.value);
		setHolidays([]);
	};

	return (
		<>
			<h2>Statni svatky v roce {selectedYear}</h2>

			<select value={selectedYear} onChange={handleSetSelectedYear}>
				{years.map((year) => (
					<option key={year}>{year}</option>
				))}
			</select>
			{holidays.length === 0 ? (
				<Loader />
			) : (
				<table>
					<thead>
						<tr>
							<th>Den</th>
							<th>Nazev</th>
						</tr>
					</thead>
					<tbody>
						{holidays.map((date) => {
							return (
								<tr key={date.date}>
									<td>{new Date(date.date).toLocaleDateString("cs-CZ")}</td>
									<td>{date.localName}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</>
	);
};
