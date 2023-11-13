import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContentPrimaryFrame from "../ui/frame/ContentPrimaryFrame";
import PrimaryButton from "../ui/button/PrimaryButton";
import { AuthorizationEmailInput } from "../ui/input/authorization/AuthorizationEmailInput";
import { AuthorizationPasswordInput } from "../ui/input/authorization/AuthorizationPasswordInput";
import API from "../../dal/API";
import { RootState} from "../../redux/store";
import NavbarBlock from "../navbar/NavbarBlock";

const LoginBlock = () => {
	const navigator = useNavigate();
	const authorizationState = useSelector((state: RootState) => state.authorization);

	const onAuthClick = () => {
		API.account.signIn({
			email: authorizationState.email,
			password: authorizationState.password,
		})
			.then(request =>
			{
				console.log(request.token);
				navigator('/');
			})
			.catch(err => {
				console.error(err.message);
			});
	};

	return (
		<>
			<NavbarBlock/>
			<ContentPrimaryFrame className="auth-page__auth-block">
			<h1>Авторизация</h1>
			<AuthorizationEmailInput/>
			<AuthorizationPasswordInput/>
			<PrimaryButton
				className="ui__primary-button auth-frame__button_auth"
				onClick={onAuthClick}
				content="Войти"/>
		</ContentPrimaryFrame>
		</>
	);
};
export default LoginBlock;
