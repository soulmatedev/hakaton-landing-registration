import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PasswordInput from "./Password";
import { RootState } from '../../../redux/store';
import { updateAuthorizationPassword } from "../../../redux/reducers/authorizationValues";

export const AuthorizationPasswordInput = () => {
	const dispatch = useDispatch();
	const state: RootState = useSelector(state => state) as RootState;

	return (
		<PasswordInput
			className="ui__input login-frame__input_password"
			onChange={ev => dispatch(updateAuthorizationPassword(ev.target.value))}
			value={() => state.authorization.password}
		/>
	);
};
