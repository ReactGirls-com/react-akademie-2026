import { useState } from "react";
import { createYears } from "./holidaysUtils.js";
import { SelectNumberOfYears } from "./SelectNumberOfYears.jsx";
import { SelectYear } from "./SelectYear.jsx";
import { HolidaysData } from "./HolidaysData.jsx";

const DEFAULT_YEARS_BACK = 10;

export const HolidaysEnhanced = () => {
	const [numberOfYears, setNumberOfYears] = useState(DEFAULT_YEARS_BACK);

	const years = createYears(numberOfYears);

	const [selectedYear, setSelectedYear] = useState(years[0]);

	const handleNumberOfYearsChange = (newNumber) => {
		setNumberOfYears(newNumber);

		// Vypočítáme nové roky
		const newYears = createYears(newNumber);

		// Pokud aktuální rok nebude v novém seznamu, rovnou ho změníme
		if (!newYears.includes(selectedYear)) {
			setSelectedYear(newYears[0]);
		}
	};

	return (
		<>
			<h2>Statni svatky v roce {selectedYear}</h2>

			<div>
				<SelectNumberOfYears value={numberOfYears} onChange={handleNumberOfYearsChange} />
			</div>
			<div>
				<SelectYear years={years} value={selectedYear} onChange={setSelectedYear} />
			</div>

			<HolidaysData selectedYear={selectedYear} />
		</>
	);
};
