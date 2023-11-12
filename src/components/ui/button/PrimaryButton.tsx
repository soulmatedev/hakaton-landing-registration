import React from 'react';
import { IPrimaryButtonProps} from "./interface/IPrimaryButtonProps";

const PrimaryButton = (props: IPrimaryButtonProps) => {
	const { content, onClick, className } = props;

	return (
		<button
			type="button"
			className={`ui__primary-button ${className === undefined ? '' : className}`}
			onClick={onClick}
		>
			{ content }
		</button>
	);
};

export default PrimaryButton;
