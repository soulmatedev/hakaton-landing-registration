import React from 'react';
import {ISecondaryButtonProps} from "./interface/ISecondaryButtonProps";

const SecondaryButton = (props: ISecondaryButtonProps) => {
	const { content, onClick, className } = props;

	return (
		<button
			className={`ui__secondary-button ${className}`}
			type="button"
			onClick={onClick}
		>
			{ content }
		</button>
	);
};

export default SecondaryButton;
