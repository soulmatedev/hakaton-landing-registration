import React from 'react';
import UsernameInput from "../UsernameInput";
import {updateRegistrationUsername} from "../../../../redux/reducers/registrationValues";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";

const RegistrationUsernameInput = () => {
	const dispatch = useDispatch();
	const state: RootState = useSelector(state => state) as RootState;

	return (
		<UsernameInput
			className="ui__input registration-frame__input_username"
			onChange={ev => dispatch(updateRegistrationUsername(ev.target.value))}
			value={() => state.registration.username}
		/>
		)
};

export default RegistrationUsernameInput;
