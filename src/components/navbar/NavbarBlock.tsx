import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderButton from '../ui/button/HeaderButton';
import PrimaryButton from "../ui/button/PrimaryButton";

const NavbarBlock = () => {
    const navigator = useNavigate();

    const onRegistrationClick = () => {
        navigator('/registration');
    };

    const onProgramClick = () => {
        navigator('/program');
    };

    const onHomePageClick = () => {
        navigator('/');
    };

    const onDescriptionClick = () => {
        navigator('/description');
    };

    return (
        <header className="navbar">
            <div className="navbar-content">
                <ul className="navbar-content_ul">
                    <li className="navbar-content_li">
                        <HeaderButton
                          className="navbar-content__button_home"
                          content="Главная"
                          onClick={onHomePageClick}
                        />
                        <HeaderButton
                            className="navbar-content__button_program"
                            content="Программа"
                            onClick={onProgramClick}
                        />
                        <HeaderButton
                            className="navbar-content__button_description"
                            content="Описание"
                            onClick={onDescriptionClick}
                        />
                        <PrimaryButton
                            className="navbar-content__button_registration"
                            content="Зарегистрироваться"
                            onClick={onRegistrationClick}
                        />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default NavbarBlock;
