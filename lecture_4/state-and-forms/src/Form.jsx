import { useState } from "react";
import { Wrapper } from "./Wrapper";
import { Row } from "./Row";

export const Form = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");

	const onSubmit = () => {
		console.log("submitted: ", name, surname);
	};

	return (
		<Wrapper>
			<h2>Form</h2>
			<Row>
				Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</Row>
			<Row>
				Surname: <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
			</Row>
			<button onClick={onSubmit}>Submit</button>
		</Wrapper>
	);
};
