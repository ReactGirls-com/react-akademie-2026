import { useState, useEffect } from "react";

export const Forms = () => {
	const [firstName, setFirstName] = useState("");

	const handleSetFirstName = (event) => {
		setFirstName(event.target.value);
	};

	useEffect(() => {
		console.log(`Nova hodnota jmena je: ${firstName}`);

		return () => {
			console.log("zde po sobe uklizim");
		};
	}, [firstName]);

	return (
		<>
			<h2>Jmeno</h2>
			<input value={firstName} onChange={handleSetFirstName} />
			<span>Prvni jmeno je: {firstName}</span>
		</>
	);
};
