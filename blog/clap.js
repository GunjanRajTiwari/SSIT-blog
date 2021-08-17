import ClapButton from "react-clap-button";
function Clap() {
	return (
		<ClapButton
			count={0}
			countTotal={0}
			maxCount={50}
			isClicked={false}
			onCountChange={onCountChange}
			iconComponent={props => <CustomIcon {...props} size={38} />}
		/>
	);
}

export default Clap;
