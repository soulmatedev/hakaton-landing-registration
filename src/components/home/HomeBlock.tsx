import React from "react";
import PrimaryButton from "../ui/button/PrimaryButton";
import {useNavigate} from "react-router-dom";

const HomeBlock = () => {
	const navigator = useNavigate();

	const onAuthorizationClick = () => {
		navigator('/authorization');
	};

	const onRegistrationClick = () => {
		navigator('/registration');
	};

	return (
		<div>
			<PrimaryButton
				content="Авторизация"
				onClick={onAuthorizationClick}
			/>
			<PrimaryButton
				content="Регистрация"
				onClick={onRegistrationClick}
			/>
		</div>
	)
}

export default HomeBlock;
