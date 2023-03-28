import "../styles/consultationBookingProcess.css"

export default function ConsultationBookingProcess({consultationPrice, consultationLength}) {
    return (
        <div className="processesContainer">
            <div className="processContainer">
                <h3>Запись</h3>
                <p>Вы записываетесь на бесплатную 15-ти минутную беседу</p>
            </div>
            <div className="processContainer">
                <h3>Ознакомительная беседа</h3>
                <p>На этой бесплатной ознакомительной 15-ти минутной онлайн беседе мы:</p>
                <ul>
                    <li>Познакомимся лично</li>
                    <li>Обсудим процесс терапии в Вашем случае</li>
                    <li>Согласуем организационные моменты</li>
                    <li>Я отвечу на Ваши вопросы</li>
                    <li>Запишемся на консультацию</li>
                </ul>
            </div>
            <div className="processContainer">
                <h3>Консультация</h3>
                <p>Консультация</p>
            </div>
            <div className="processContainer">
                <h3>Оплата</h3>
                <p>Стоимость консультации <b>{consultationPrice} руб за {consultationLength} мин.</b></p>
                <p>Оплата после окончания консультации, если Вы довольны результатом</p>
            </div>
        </div>
    );
}