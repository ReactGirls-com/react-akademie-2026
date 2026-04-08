import { useEffect, useState } from "react";

// Zakladni verze statnich svatku bez prepinace na roky
export const HolidaysSimple = () => {
	const [holidays, setHolidays] = useState([]);

	useEffect(() => {
		const fetchAndSetHolidays = async () => {
			const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/2025/CZ`);
			setHolidays(await response.json());
		};

		fetchAndSetHolidays();
	}, []);

	return (
		<main>
			<header>
				<h2>Statni svatky v roce 2025</h2>
			</header>
			<section>
				{/* Pro zmenu pouzity tag ol misto tabulky. */}
				<ol>
					{holidays.map((holiday) => (
						<li key={holiday.date}>
							<strong>{holiday.localName}</strong> ({new Date(holiday.date).toLocaleDateString()})
						</li>
					))}
				</ol>
			</section>
		</main>
	);
};
