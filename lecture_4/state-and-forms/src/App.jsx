import { CorrectCounter, WrongCounter } from "./Counter";
import { IncreaseByOne } from "./IncreaseByOne";
import { CorrectList, WrongList } from "./List";
import { Animals } from "./Animals";
import { Form } from "./Form";

import "./App.css";

function App() {
	return (
		<>
			<WrongCounter />
			<CorrectCounter />

			<IncreaseByOne />

			<WrongList />
			<CorrectList />

			<Animals />

			<Form />
		</>
	);
}

export default App;
