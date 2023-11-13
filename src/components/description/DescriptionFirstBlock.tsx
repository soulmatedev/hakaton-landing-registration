import React from "react";
import NavbarBlock from "../navbar/NavbarBlock";


export const DescriptionFirstBlock = () => {
    return (
        <>
            <NavbarBlock/>
            <div className="description-page__description-block">
                <div className="description-page__description-container">
                    <div>

                    </div>
                    <div className="description-page__description-desc">
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
            </div>
        </>
    )
}


