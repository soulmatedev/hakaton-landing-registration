import React, { useRef } from 'react';
import { IEmailInputProps } from './interface/IEmailInput';
import InputType from './InputType';

const EMAIL_PLACEHOLDER = 'Email';

const EmailInput = (props: IEmailInputProps) => {
	const { className, onChange, value } = props;
	const ref = useRef<HTMLInputElement>(null);

	return (
		<input
			ref={ref}
			max={32}
			className={`ui__input ${className}`}
			placeholder={EMAIL_PLACEHOLDER}
			onChange={onChange}
			value={value()}
			type={InputType.Text}
		/>
	);
};

export default EmailInput;
