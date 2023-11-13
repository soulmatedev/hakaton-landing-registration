import React from "react";
import FooterBlock from "../footer/FooterBlock";

export const DescriptionSecondBlock = () => {
    return (
        <>
            <div className="description-page__description-block">
                <div className="description-page__description-container">
                    <div>

                    </div>
                    <div className="description-page__description-desc">
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
                        Участники: Открыто для студентов от 15 до
                        23 лет образовательных учреждений Курганской области.
                    </div>
                </div>
            </div>
            <FooterBlock/>
        </>
    )
}


