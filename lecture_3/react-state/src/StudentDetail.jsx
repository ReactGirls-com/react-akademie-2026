import { Button } from "./Button";

export const StudentDetail = ({ name, age, onStudentClick }) => {
	return (
		<>
			<p>
				{name}: {age}
			</p>
			<Button onClickFunction={onStudentClick} name={"click me"} />
		</>
	);
};
