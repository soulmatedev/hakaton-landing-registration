import { ChangeEvent } from 'react';

export interface IEmailInputProps {
	className?: string,
	placeholder?: string,
	onChange: (ev: ChangeEvent<HTMLInputElement>) => void,
	value: () => string,
}
