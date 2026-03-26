import { lide } from "./lide";

export const People = () => {
	const people = lide;
	const older30 = people.filter((person) => person.vek > 30);

	return (
		<ul>
			{older30.map((person) => {
				return (
					<li key={person.id}>
						{person.jmeno} {person.prijmeni} ({person.vek} let)
					</li>
				);
			})}
		</ul>
	);
};
