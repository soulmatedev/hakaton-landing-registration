import React, { useRef } from 'react';
import InputType from './InputType';
import { IPasswordInputProps } from './interface/IPasswordInput';

const PASSWORD_PLACEHOLDER = 'Пароль';

const PasswordInput = (props: IPasswordInputProps) => {
	const { className, value, onChange } = props;
	const ref = useRef<HTMLInputElement>(null);

	return (
		<input
			ref={ref}
			max={32}
			className={`ui__input ${className}`}
			placeholder={PASSWORD_PLACEHOLDER}
			value={value()}
			onChange={onChange}
			type={InputType.Encrypted}
		/>
	);
};

export default PasswordInput;
