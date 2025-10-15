import { useEffect } from "react";
import "../styles/consultationBookingProcess.css"
import { Link } from "react-router-dom";

export default function ConsultationBookingProcess({consultationPrice, consultationLength, whatsAppLink}) {
    useEffect(() => {
        const path = document.querySelector('.myPath');
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength + " " + pathLength;
        path.style.strokeDashoffset = pathLength;
        const processesContainer = document.querySelector(".processesContainer");
        let height = processesContainer.getBoundingClientRect().height;
        path.setAttribute("d", `m 0 0 l 0 ${height}`);

        function processScroll() {
            const rect = processesContainer.getBoundingClientRect();
            if (rect.top < rect.height) {
                const percentageOfSectionScrolled = Math.round(((rect.height - (rect.top + rect.height / 2)) / rect.height) * 100) / 100;
                let drawLength = pathLength * percentageOfSectionScrolled;
                path.style.strokeDashoffset = pathLength - drawLength;
    
                if (percentageOfSectionScrolled > 1) {
                    window.removeEventListener("scroll", processScroll);
                    path.style.strokeDashoffset = "0";
                }
            }
        }
        
        window.addEventListener("scroll", processScroll);
  });

    return (
        <div className="processesContainer">
            <svg className="processContainerSVG">
                <path className="myPath" d="m 0 0 l 0 1000"/>
            </svg>
            <div className="processContainer">
                <h3>I. Запись</h3>
                <p>Вы записываетесь на бесплатную 15-ти минутную онлайн беседу.</p>
                <p>Это можно сделать <Link to="/book-consultation">онлайн</Link> или в <Link to={whatsAppLink} target="_blank" rel="noopener noreferrer">WhatsApp</Link>.</p>
            </div>
            <div className="processContainer">
                <h3>II. Ознакомительная беседа</h3>
                <p>Во время беседы мы:</p>
                <ul>
                    <li>Познакомимся лично</li>
                    <li>Обсудим процесс терапии в Вашем случае</li>
                    <li>Согласуем организационные моменты</li>
                    <li>Я отвечу на Ваши вопросы</li>
                    <li>Запишемся на консультацию</li>
                </ul>
            </div>
            <div className="processContainer">
                <h3>III. Консультация</h3>
                <p>Ваш путь к гармонии начинается здесь.</p>
                <p>Встречи проходят онлайн в видео-формате с помощью WhatsApp или Telegram.</p>
                <p>Продолжительность 1-й сессии от 40 до 60 мин.</p>
            </div>
            <div className="processContainer" id="test">
                <h3>IV. Оплата</h3>
                <p>Оплата после консультации.</p>
                <p>Стоимость консультации <b>{consultationPrice} руб за {consultationLength} мин.</b></p>
            </div>

        </div>
    );
}