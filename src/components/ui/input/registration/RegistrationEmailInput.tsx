import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmailInput from "../EmailInput";
import { updateRegistrationEmail } from "../../../../redux/reducers/registrationValues";
import { RootState} from "../../../../redux/store";

const RegistrationEmailInput = () => {
	const dispatch = useDispatch();
	const state: RootState = useSelector(state => state) as RootState;

	return (
		<EmailInput
			className="ui__input registration-frame__input_email"
			onChange={ev => dispatch(updateRegistrationEmail(ev.target.value))}
			value={() => state.registration.email}
		/>
	);
};

export default RegistrationEmailInput;
