import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import HeaderButton from '../ui/button/HeaderButton';
import PrimaryButton from "../ui/button/PrimaryButton";

const onAuthorizationClick = (navigateToSchemas: NavigateFunction) => {
    navigateToSchemas('/authorization');
};

const onOrganizationsClick = (navigateToSchemas: NavigateFunction) => {
    navigateToSchemas('/organizations');
};

const onDashboardClick = (navigateToSchemas: NavigateFunction) => {
    navigateToSchemas('/dashboard');
};

const NavbarBlock = () => {
    const navigate = useNavigate();

    return (
        <header className="navbar">
            <div className="navbar-content">
                <ul className="navbar-content_ul">
                    <li className="navbar-content_li">
                        <HeaderButton
                            className="navbar-content__button_dashboard"
                            content="Программа"
                            onClick={() => onDashboardClick(navigate)}
                        />
                        <HeaderButton
                            className="navbar-content__button_list_organizations"
                            content="Описание"
                            onClick={() => onOrganizationsClick(navigate)}
                        />
                        <PrimaryButton
                            className="navbar-content__button_authorization"
                            content="Зарегистрироваться"
                            onClick={() => onAuthorizationClick(navigate)}
                        />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default NavbarBlock;