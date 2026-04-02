import { useState } from "react";
import { Row } from "./Row";
import { Wrapper } from "./Wrapper";

export const Animals = () => {
	const animalsToChooseFrom = ["rabbit", "dog", "cat", "horse"];
	const [animals, setAnimals] = useState([]);

	return (
		<Wrapper>
			<p>Animal list:</p>
			<ul>
				{animals.map((animal) => (
					<li key={animal}>{animal}</li>
				))}
			</ul>
			<Row>
				Add:
				{animalsToChooseFrom.map((animal) => (
					<button key={animal} onClick={() => setAnimals([...animals, animal])}>
						{animal}
					</button>
				))}
			</Row>
		</Wrapper>
	);
};
