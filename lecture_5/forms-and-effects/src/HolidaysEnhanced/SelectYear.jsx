export const SelectYear = ({ years, value, onChange, disabled }) => {
	return (
		<label>
			Rok:{" "}
			<select value={value ?? ""} onChange={(e) => onChange(e.target.value)} disabled={disabled || years.length === 0}>
				{years.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
		</label>
	);
};
