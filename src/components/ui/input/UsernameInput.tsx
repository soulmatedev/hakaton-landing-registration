import React, { useRef } from 'react';
import InputType from './InputType';
import {IUsernameInputProps} from "./interface/IUsernameInput";

const USERNAME_PLACEHOLDER = 'Логин';

const UsernameInput = (props: IUsernameInputProps) => {
	const { className, value, onChange } = props;
	const ref = useRef<HTMLInputElement>(null);

	return (
		<input
			ref={ref}
			max={32}
			className={`ui__input ${className}`}
			placeholder={USERNAME_PLACEHOLDER}
			value={value()}
			onChange={onChange}
			type={InputType.Text}
		/>
	);
};

export default UsernameInput;
