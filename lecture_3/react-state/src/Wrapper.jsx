export const Wrapper = ({ children }) => {
	return (
		<div className="column">
			<p>Header</p>
			{children}
			<p>Footer</p>
		</div>
	);
};
