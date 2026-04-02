import { useState } from "react";
import { Wrapper } from "./Wrapper";
import { Row } from "./Row";

export const IncreaseByOne = () => {
	const [number, setNumber] = useState(0);

	return (
		<Wrapper>
			<Row>
				<p>Number: {number}</p>
				<button onClick={() => setNumber(number + 1)}>Add + 1</button>
			</Row>
			{number % 2 === 0 && <p>Even number</p>}
		</Wrapper>
	);
};
