import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContentPrimaryFrame from "../ui/frame/ContentPrimaryFrame";
import PrimaryButton from "../ui/button/PrimaryButton";
import { RootState} from "../../redux/store";
import API from "../../dal/API";
import RegistrationUsernameInput from "../ui/input/registration/RegistrationUsernameInput";
import RegistrationPasswordInput from "../ui/input/registration/RegistrationPasswordInput";
import RegistrationEmailInput from "../ui/input/registration/RegistrationEmailInput";

const RegistrationBlock = () => {
	const navigator = useNavigate();
	const registrationState = useSelector((state: RootState) => state.registration);

	const onRegistrationClick = () => {
		API.account.signUp({
			username: registrationState.username,
			email: registrationState.email,
			password: registrationState.password,
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
		<ContentPrimaryFrame className="registration-page__registration-block">
			<h1>Регистрация</h1>
			<RegistrationUsernameInput />
			<RegistrationEmailInput />
			<RegistrationPasswordInput />
			<PrimaryButton
				className="ui__primary-button registration-frame__button_registration"
				onClick={onRegistrationClick}
				content="Зарегистрироваться"
			/>
		</ContentPrimaryFrame>
	);
};

export default RegistrationBlock;
