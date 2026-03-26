// První způsob - předáváme props

/*export const User = (props) => {
	return (
		<p>
			User: {props.firstName} {props.lastName}, age: {props.age}
		</p>
	);
};*/

// Druhý způsob - předáváme props a použijeme destrukturalizaci

export const User = ({ firstName, lastName, age }) => {
	return (
		<p>
			User: {firstName} {lastName}, age: {age}
		</p>
	);
};
