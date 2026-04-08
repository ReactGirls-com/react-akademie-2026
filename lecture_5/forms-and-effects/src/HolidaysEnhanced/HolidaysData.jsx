import { useState, useEffect } from "react";
import { Loader } from "../Loader/Loader.jsx";

export const HolidaysData = ({ selectedYear }) => {
	const [holidays, setHolidays] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (selectedYear == null || Number.isNaN(selectedYear)) {
			return;
		}

		setIsLoading(true);

		const fetchAndSetHolidays = async () => {
			try {
				const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${selectedYear}/CZ`);

				setHolidays(await response.json());
			} finally {
				setIsLoading(false);
			}
		};

		fetchAndSetHolidays();
	}, [selectedYear]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Den</th>
					<th>Nazev</th>
				</tr>
			</thead>
			<tbody>
				{holidays.map((date) => (
					<tr key={date.date}>
						<td>{new Date(date.date).toLocaleDateString("cs-CZ")}</td>
						<td>{date.localName}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
