import { ChangeEvent } from 'react';

export interface IPasswordInputProps {
	className?: string,
	placeholder?: string,
	onChange: (ev: ChangeEvent<HTMLInputElement>) => void,
	value: () => string,
}
