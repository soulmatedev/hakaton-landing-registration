import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmailInput from '../EmailInput';
import { RootState } from '../../../../redux/store';
import { updateAuthorizationEmail } from "../../../../redux/reducers/authorizationValues";

export const AuthorizationEmailInput = () => {
	const dispatch = useDispatch();
	const state: RootState = useSelector(state => state) as RootState;

	return (
		<EmailInput
			className="ui__input login-frame__input_email"
			onChange={ev => dispatch(updateAuthorizationEmail(ev.target.value))}
			value={() => state.authorization.email}
		/>
	);
};
