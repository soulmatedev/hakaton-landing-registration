import React from "react";
import FooterBlock from "../footer/FooterBlock";
import Logo from "../../assets/jpg/Logo.jpg";

export const DescriptionSecondBlock = () => {
    return (
        <>
            <div className="description-second-page__description-block">
                <div className="description-second-page__description-desc">
                    <span>  Цель и Задачи: </span> <br/>
                    Цель – поддержка талантов в IT.
                    Задачи включают стимулирование профессиональных
                    навыков, отработку презентаций и демонстрацию
                    инноваций.<br/>
                    <br/>
                    <span>   Организация: </span> <br/>
                    Хакатон проводится
                    Курганским технологическим колледжем.<br/>
                    <br/>
                    <span>  Организация: </span> <br/>
                    Участники: Открыто для студентов от 15 до
                    23 лет образовательных учреждений Курганской области.
                </div>
                <div className="description-second-page__description-art">
                    <img src={Logo} alt="iiuii"/>
                </div>
            </div>
            <FooterBlock/>
        </>
    )
}


