import { Menu } from "./Menu";
import { Colors } from "./Colors";
import { Numbers } from "./Numbers";
import { List } from "./List";
import { People } from "./People";
import { User } from "./User";
import "./App.css";

// První způsob předávání dat do komponenty User
// Předáváme hodnoty přímo

/*function App() {
 	return (
 		<>
 			<Menu />
 			<Colors />
 			<Numbers />
 			<List />
 			<People />
 			<User firstName={"Petr"} lastName={"Novak"} age={30} />
 		</>
 	);
}

export default App;*/

// Druhý způsob předávání dat do komponenty User
// Předáváme hodnoty jako proměnné

function App() {
	const firstName = "Petr";
	const lastName = "Novak";
	const age = 30;

	return (
		<>
			<Menu />
			<Colors />
			<Numbers />
			<List />
			<People />
			<User firstName={firstName} lastName={lastName} age={age} />
		</>
	);
}

export default App;
