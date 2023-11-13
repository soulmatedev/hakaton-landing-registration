import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ContentPrimaryFrame from "../ui/frame/ContentPrimaryFrame";
import PrimaryButton from "../ui/button/PrimaryButton";
import {RootState} from "../../redux/store";
import API from "../../dal/API";
import RegistrationUsernameInput from "../ui/input/registration/RegistrationUsernameInput";
import RegistrationPasswordInput from "../ui/input/registration/RegistrationPasswordInput";
import RegistrationEmailInput from "../ui/input/registration/RegistrationEmailInput";
import NavbarBlock from "../navbar/NavbarBlock";

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
		<>
			<NavbarBlock/>
			<div className="registration-page__block">
				<div className="registration-page__left-block">
					<div className="registration-page__content-block">
						<h1>Зарегистрируйтесь</h1>
						<RegistrationUsernameInput/>
						<RegistrationEmailInput/>
						<RegistrationPasswordInput/>
						<div className="registration-frame__button">
							<PrimaryButton
								className="registration-frame__button_registration"
								onClick={onRegistrationClick}
								content="Зарегистрироваться"
							/>
						</div>
					</div>
				</div>
				<div className="registration-page__right-block">
					<div className="registration-page__right-block-content">

					</div>
				</div>
			</div>
		</>
	);
};

export default RegistrationBlock;
