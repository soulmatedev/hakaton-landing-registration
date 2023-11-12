import InputType from '../InputType';
import { RootState } from '../../../../redux/store';

export interface IInputProps {
	type: InputType,
	max: number,
	validationFunctions: ((content: string) => boolean)[],
	onInput?: (content: string) => void,
	className?: string,
	placeholder?: string,
	value: (state: RootState) => string,
}
