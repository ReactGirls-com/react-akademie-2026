import { useState } from "react";
import { Wrapper } from "./Wrapper";
import { Row } from "./Row";

// Příklad 1 - změna proměnné nezpůsobí re-render komponenty

export const WrongCounter = () => {
	const index = 1;

	return (
		<Wrapper>
			<Row>
				Value of index: {index}
				<button
					onClick={() => {
						index = index + 1;
					}}
				>
					add + 1
				</button>
			</Row>
		</Wrapper>
	);
};

// Příklad 2 - změna stavu způsobí re-render komponenty

export const CorrectCounter = () => {
	const [index, setIndex] = useState(0);

	return (
		<Wrapper>
			<Row>
				Value of index: {index}
				<button
					onClick={() => {
						setIndex(index + 1);
					}}
				>
					add + 1
				</button>
			</Row>
		</Wrapper>
	);
};
