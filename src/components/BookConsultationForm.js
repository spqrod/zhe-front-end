import SocialLinks from "../components/SocialLinks";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import ru from 'date-fns/locale/ru';
import { useState } from "react";
import "../styles/bookConsultationForm.css";

export default function BookConsultationForm() {

    const today = new Date();
    const tomorrow = new Date(today).setDate(today.getDate() + 1);
    const todayPlus30Days = new Date(today).setDate(today.getDate() + 30);
    const captchaRef = useRef(null);

    const availableDays = [
        new Date(2023, 7, 27, 11, 0),
        new Date(2023, 7, 27, 12, 0),
        new Date(2023, 7, 27, 13, 30),

        new Date(2023, 7, 28, 9, 0),
        new Date(2023, 7, 28, 10, 0),
        new Date(2023, 7, 28, 11, 0),
        new Date(2023, 7, 28, 11, 30),
        
        new Date(2023, 7, 29, 10, 0),
        
        new Date(2023, 7, 2, 9, 0),
        new Date(2023, 7, 7, 9, 0),
        new Date(2023, 7, 15, 9, 0),
    ];

    const [selectedDate, setSelectedDate] = useState();

    const [availableTimes, setAvailableTimes] = useState([]);

    function updateAvailableTimes(selectedDate) {
        let newArray = [];
        newArray = availableDays.filter(date => 
            ((date.getFullYear() === selectedDate.getFullYear()) 
            && (date.getMonth() === selectedDate.getMonth()) 
            && (date.getDate() === selectedDate.getDate()))
        );
        setAvailableTimes(newArray);
    }

    function handleDateSelect(selectedDate) {
        updateAvailableTimes(selectedDate);
    }

    function handleDateChange(date) {
        setSelectedDate(date)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();

        const { date, name, email, phone, message } = e.target.elements;

        const formData = {
            date: date.value,
            name: name.value,
            email: email.value,
            phone: phone.value,
            message: message.value
        }

        const response = await fetch("https://website.com/book-consultation", {
            method: "POST",
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.status);
    }

    function handleTelInputChange() {
        revealConsentCheckboxAndReCaptcha();
    }

    function revealConsentCheckboxAndReCaptcha() {
        const legalConsentCheckboxContainer = document.querySelector(".legalConsentCheckboxContainer");
        legalConsentCheckboxContainer.classList.add("active");
        const reCaptcha = document.querySelector(".reCaptcha");
        reCaptcha.classList.add("active");
    }

    return (
        <div className="bookConsultationForm">
            <form className="form" onSubmit={handleSubmit}>

                {/* ADD IDs TO INPUT FIELDS */}

                <DatePicker 
                    className="inputField"
                    withPortal
                    minDate={tomorrow}
                    maxDate={todayPlus30Days}
                    includeDates={availableDays}
                    includeTimes={availableTimes}
                    locale={ru}
                    showTimeSelect
                    timeFormat="p"
                    placeholderText="Выбрать день"
                    onSelect={handleDateSelect}
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd MMMM yyyy, h:mm"
                    timeCaption="Время"
                    id="date"
                />
                <input className="inputField" type="text" placeholder="Имя" name="name" id="name" />
                <input className="inputField" type="email" placeholder="E-mail" name="email" required />
                <input className="inputField" type="tel" placeholder="Телефон" name="phone" required onChange={handleTelInputChange} />
                <div className="legalConsentCheckboxContainer">
                    <input type="checkbox" className="legalConsentCheckbox" name="legalConsentCheckbox" id="legalConsentCheckbox" required />
                    <label htmlFor="legalConsentCheckbox">Я принимаю <Link to="/terms-of-service">Условия использования</Link> и <Link to="/privacy-policy">Политику конфиденциальности</Link></label>
                </div>
                <ReCAPTCHA 
                    className="reCaptcha"
                    sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY} 
                    ref={captchaRef}
                />
                <button className="button" type="submit">
                    Записаться
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                </button>
            </form>
            <div className="alternativeBookingMethodContainer">
                <p>Вы также можете записаться, просто написав мне в:</p>
                <SocialLinks />
            </div>
        </div>
    );
};