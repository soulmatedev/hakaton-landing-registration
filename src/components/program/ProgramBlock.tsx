import React from "react";
import NavbarBlock from "../navbar/NavbarBlock";
import FooterBlock from "../footer/FooterBlock";

const ProgramBlock = () => {
    return (
        <>
            <NavbarBlock/>
            <div className="program-page__block">
                <div className="program-page__left-block">
                    <div className="program-page__center-program-left-info">
                        13
                    </div>
                    <div className="program-page__left-program-left-info">
                        <span> 09.00-09.30 </span> <br/>
                        Регистрация команд участников <br/>
                        <br/>
                        <span> 09.30-10.00</span> <br/>
                        Открытие Хакатона. <br/>
                        Представление участников команд <br/>
                        <br/>
                        <span> 10.00-10.20 </span> <br/>
                        Получение кейса <br/>
                        <br/>
                        <span> 10.20-12.00 </span> <br/>
                        Проектирование <br/>
                    </div>
                    <div className="program-page__right-program-left-info">
                        <span> 12.00- 13.00 </span> <br/>
                        Обед <br/>
                        <br/>
                        <span> 13.00-15.30 </span> <br/>
                        Работа в среде разработки <br/>
                        <br/>
                        <span> 15.30-16.00 </span> <br/>
                        Чек-поинт первого дня <br/>
                    </div>
                </div>
                <div className="program-page__right-block">
                    <div className="program-page__center-program-right-info">
                        14
                    </div>
                    <div className="program-page__left-program-right-info">
                        <span> 09.00-09.15 </span> <br/>
                        Регистрация команд участников. Открытие <br/>
                        второго дня <br/>
                        <br/>
                        <span> 09.15-12.00 </span> <br/>
                        Работа в среде разработки <br/>
                        <br/>
                        <span>  12.00- 13.00</span>  <br/>
                        Обед <br/>
                        <span>  13.00-14.00</span>  <br/>
                        Подготовка к защите проекта <br/>

                    </div>
                    <div className="program-page__right-program-right-info">
                        <span> 14.00-15.30 </span> <br/>
                        Защита проекта <br/>
                        <br/>
                        <span> 15.30-16.00 </span> <br/>
                        Работа экспертной <br/>
                        комиссии <br/>
                        <br/>
                        <span> 16.00-16.30 </span> <br/>
                        Подведение итогов. <br/>
                        Награждение <br/>
                    </div>
                </div>
            </div>
            <FooterBlock/>
        </>)
}

export default ProgramBlock;
