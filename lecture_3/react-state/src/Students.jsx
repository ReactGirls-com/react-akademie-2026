import { StudentDetail } from "./StudentDetail";

// první způsob - bez destrukturalizace props

/*export const Students = (props) => {
	if (props.students.length === 0) {
		return <p>No students.</p>;
	}

	const onStudentClick = (jmeno) => {
		console.log(jmeno);
	};

	return (
		<>
			{props.students.map((student) => (
				<StudentDetail
					key={student.id}
					name={student.jmeno}
					age={student.vek}
					onStudentClick={() => onStudentClick(student.jmeno)}
				/>
			))}
		</>
	);
};*/

// druhý způsob - s destrukturalizací props

export const Students = ({ students }) => {
	if (students.length === 0) {
		return <p>No students.</p>;
	}

	const onStudentClick = (jmeno) => {
		console.log(jmeno);
	};

	return (
		<>
			{students.map((student) => (
				<StudentDetail
					key={student.id}
					name={student.jmeno}
					age={student.vek}
					onStudentClick={() => onStudentClick(student.jmeno)}
				/>
			))}
		</>
	);
};
