import "./App.css";
import { User } from "./User";
import { Button } from "./Button";
import { lide } from "./lide";
import { Students } from "./Students";
import { Wrapper } from "./Wrapper";

function App() {
	const students = lide;

	const printToConsole = () => {
		console.log("ahoj");
	};

	const name = "Click me now!";

	return (
		<>
			<Wrapper>
				<User />
				<Students students={students} />
				<Button onClickButton={printToConsole} name={name} />
			</Wrapper>
		</>
	);
}

export default App;
