export const SelectNumberOfYears = ({ value, onChange, min = 1, max = 30 }) => {
	return (
		<label>
			Roky v nabídce (kolik let dozadu od aktuálního roku):{" "}
			<input type="number" value={value} onChange={(e) => onChange(e.target.value)} min={min} max={max} step="1" />
		</label>
	);
};
