import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PrimaryButton from "../ui/button/PrimaryButton";
import {AuthorizationEmailInput} from "../ui/input/authorization/AuthorizationEmailInput";
import {AuthorizationPasswordInput} from "../ui/input/authorization/AuthorizationPasswordInput";
import API from "../../dal/API";
import {RootState} from "../../redux/store";
import NavbarBlock from "../navbar/NavbarBlock";
import SecondaryButton from "../ui/button/SecondaryButton";
import AuthorizationLogo from "../../assets/jpg/AuthorizationArt.jpg";
import FooterBlock from "../footer/FooterBlock";

const LoginBlock = () => {
	const navigator = useNavigate();
	const authorizationState = useSelector((state: RootState) => state.authorization);

	const onRegistrationClick = () => (
		navigator("/registration")
	)

	const onAuthClick = () => {
		API.account.signIn({
			email: authorizationState.email,
			password: authorizationState.password,
		})
			.then(request => {
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
			<div className="authorization-page__block">
				<div className="authorization-page__left-block">
					<div className="auth-page__content-block">
						<h1>Присоединяйтесь !</h1>
						<AuthorizationEmailInput/>
						<AuthorizationPasswordInput/>
						<div className="authorization-page__question-box">
							<p>Не зарегистрированы ?</p>
							<SecondaryButton
								className="authorization-frame__reg-button"
								content="Регистрация"
								onClick={onRegistrationClick}
							/>
						</div>
						<div className="authorization-frame__button">
							<PrimaryButton
								className="ui__primary-button auth-frame__button_auth"
								onClick={onAuthClick}
								content="Войти"
							/>
						</div>
					</div>
				</div>
				<div className="authorization-page__right-block">
					<div className="authorization-page__right-block-content">
						<img src={AuthorizationLogo} alt="" />
					</div>
				</div>
			</div>
			<FooterBlock />
		</>
	);
};
export default LoginBlock;
