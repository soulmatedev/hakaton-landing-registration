import React from "react";
import NavbarBlock from "../navbar/NavbarBlock";
import Logo from "../../assets/jpg/Logo.jpg"



export const DescriptionFirstBlock = () => {
    return (
        <>
            <NavbarBlock/>
            <div className="description-first-page__description-block">
                <div className="description-first-page__description-art">
                    <img src={Logo} alt="iiuii"/>
                </div>
                    <div className="description-first-page__description-desc">
                        <span>  One.Code.Web: </span> <br/>
                        Региональный IT-Хакатон для Студентов <br/>
                        <br/>
                        <span>  Назначение: </span> <br/>
                        Создан для выявления и поддержки талантливых студентов в IT.<br/>
                        <br/>
                        <span>  Организаторы: </span> <br/>
                        Департамент информационных технологий,
                        Департамент образования, Курганский технологический
                        колледж, Шадринский государственный педагогический
                        университет, Курганский государственный университет,
                        Центр развития современных компетенций.
                    </div>
            </div>
        </>
    )
}


