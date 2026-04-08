import { Employees } from "./Employees/Employees";
import { Forms } from "./Forms/Forms";
import { Holidays } from "./Holidays/Holidays";
import { HolidaysSimple } from "./Holidays/HolidaysSimple.jsx";
import { HolidaysEnhanced } from "./HolidaysEnhanced/HolidaysEnhanced.jsx";
function App() {
	return (
		<>
			<Forms />
			<Employees />
			<HolidaysSimple />
			<Holidays />

			<HolidaysEnhanced />
		</>
	);
}

export default App;
