import React from "react";

const FooterBlock = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-venue">
                <h1>Место проведения:</h1>
                <span>
                    г. Курган,<br/>
                    ул. Машиностроителей, 14, к2а.
                </span>
            </div>
            <div className="footer-organizator">
                <h1>Организатор:</h1>
                <span>ГБПОУ «КТК»<br/>
                    Официальный сайт организатора:<br/>
                    https://ktk-45.ru/
                </span>
            </div>
            <div className="footer-contacts">
                <h1>Контактное лицо:</h1>
                <span>
                    Михайленко Владислав Сергеевич,<br/>
                    заместитель директора по информационным технологиям,<br/>
                    (3522) 25-53-47, it@ktk-45.ru
                </span>
            </div>
        </div>
    </footer>
)

export default FooterBlock;
