import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PasswordInput from "../Password";
import { updateRegistrationPassword } from "../../../../redux/reducers/registrationValues";
import { RootState} from "../../../../redux/store";

const RegistrationPasswordInput = () => {
	const state: RootState = useSelector(state => state) as RootState;
	const dispatch = useDispatch();

	return (
		<PasswordInput
			className="ui__input registration-frame__input_password"
			onChange={ev => dispatch(updateRegistrationPassword(ev.target.value))}
			value={() => state.registration.password}
		/>
	);
};

export default RegistrationPasswordInput;
