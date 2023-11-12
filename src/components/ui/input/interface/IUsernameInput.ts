import {ChangeEvent} from "react";

export interface IUsernameInputProps {
	onChange: (ev: ChangeEvent<HTMLInputElement>) => void,
	value: () => string,
	className: string,
}
