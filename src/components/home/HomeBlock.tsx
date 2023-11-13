import React from "react";
import PrimaryButton from "../ui/button/PrimaryButton";
import {useNavigate} from "react-router-dom";
import FooterBlock from "../footer/FooterBlock";
import NavbarBlock from "../navbar/NavbarBlock";

const HomeBlock = () => {

    const navigator = useNavigate();
    const onRegistrationClick = () => {
        navigator("/registration")
    }

    return (
        <>
            <NavbarBlock/>
            <div className="home-page__home-block">
                <div className="home-page__home-info">
                    <div className="home-page__home-agitation">
                        <div className="home-page__home_title">
                            IT-Форум “Супер гик”
                        </div>
                        <div className="home-page__home_description">
                            Привет, гики! 🚀 На пороге события, <br/>
                            которое вы не хотите пропустить – <br/>
                            Супер Гик Форум 2023!
                        </div>
                        <div className="home-page__home_venue">
                            Место проведения: ГБПОУ КТК
                        </div>
                        <div className="home-page__home-datetime">
                            Дата проведения: <span>13-14</span>  ноября <br/>
                            Время: <span>09:00 - 16:00</span>
                        </div>
                        <div className="home-page__home_button">
                            <PrimaryButton content="Зарегистироваться" onClick={onRegistrationClick}/>
                        </div>
                    </div>
                </div>
                <div className="home-page__home_logo">

                </div>
            </div>
            <FooterBlock/>
        </>
    )
}

export default HomeBlock;
