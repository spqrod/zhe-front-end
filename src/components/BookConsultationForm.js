import SocialLinks from "../components/SocialLinks";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useRef } from "react";
import ru from 'date-fns/locale/ru';
import { useState } from "react";
import "../styles/bookConsultationForm.css";

export default function BookConsultationForm() {

    const today = new Date();
    const tomorrow = new Date(today).setDate(today.getDate() + 1);
    const todayPlus30Days = new Date(today).setDate(today.getDate() + 30);

    const captchaRef = useRef(null);

    const [selectedDate, setSelectedDate] = useState();
    const [availableTimes, setAvailableTimes] = useState([]);
    const [availableDates, setAvailableDates] = useState();
    const [dataFromDB, setDataFromDB] = useState([]);

    useEffect(() => {
        api.getAvailableDatesFromDB();
    }, []);

    const api = {
        getAvailableDatesFromDB: function() {
            fetch("/api/dates")
                .then(response => response.json())
                .then(dataFromDBFetch => {
                    setDataFromDB([...dataFromDBFetch]);
                    const temporaryArray = [];
    
                    dataFromDBFetch.forEach(itemFromDBFetch => {
                        let dateItem = new Date(itemFromDBFetch.date);
                        dateItem = controller.correctDateUsingTimezoneOffset(dateItem);
                        temporaryArray.push(dateItem);
                    });

                    setAvailableDates(temporaryArray);
                });
        },
        updateDateAsTakenInDB: function(dateID) {
            const fetchURL = "/api/dates/" + dateID;
            const fetchOptions = {
                method: "PUT",
              };
            return fetch(fetchURL, fetchOptions)
                .then(response => response.json())
                .then(data => {
                    // console.log("data from fetch");
                    console.log(data);
                    if (data.isSuccessfullyUpdated) {
                        return true;
                    } else {
                        return false;
                    }
                });
        }
    };

    const controller = {

        handleDateSelect: function(selectedDate) {
            display.updateAvailableTimes(selectedDate);
        },
        handleSubmit: async function(e) {
            e.preventDefault();
            // const token = captchaRef.current.getValue();
            // captchaRef.current.reset();

            const { date, name, email, phone, message } = e.target.elements;
            
            const formData = {
                date: date.value,
                // name: name.value,
                // email: email.value,
                // phone: phone.value,
                // message: message.value
            }
            
            controller.updateDateAsTaken(formData.date).then((result) => {
                controller.showDialog(result);
            });
            // controller.showDialog();
        },
        handleDateChange: function(date) {
            setSelectedDate(date)
        },
        handleTelInputChange: function() {
            // revealConsentCheckboxAndReCaptcha();
        },
        formatDateToMatchTheForm: function(date) {
            date = controller.correctDateUsingTimezoneOffset(date);
            const options = {
                dateStyle: "short",
                timeStyle: "short",
            }
            const formattedDate = new Date(date).toLocaleString("ru-RU", options);
            return formattedDate;
        },
        correctDateUsingTimezoneOffset: function(date) {
            date = new Date(date);
            date = date.getTime() + date.getTimezoneOffset() * 1000 * 60;
            date = new Date(date);
            return date;
        },
        updateDateAsTaken: function(date) {
            const dateID = controller.getDateID(date);
            return api.updateDateAsTakenInDB(dateID);
        },
        getDateID: function(dateFromForm) {
            const document = dataFromDB.find(item => controller.formatDateToMatchTheForm(item.date) === dateFromForm);
            return document._id;
        },
        showDialog: function(result) {
            const successMessage = "Спасибо за запись! Я свяжусь с Вами в ближайшее время.";
            const failureMessage = "Простите. Что-то пошло не так. Пожалуйста, свяжитесь со мной другим способом";
            if (result) 
                display.showDialog(successMessage);
            else 
                display.showDialog(failureMessage);
        },
    }

    const display = {
        updateAvailableTimes: function(selectedDate) {
            let newArray = [];
            newArray = availableDates.filter(date => 
                ((date.getFullYear() === selectedDate.getFullYear()) 
                && (date.getMonth() === selectedDate.getMonth()) 
                && (date.getDate() === selectedDate.getDate()))
            );
            setAvailableTimes(newArray);
        },
        revealConsentCheckboxAndReCaptcha: function() {
            const legalConsentCheckboxContainer = document.querySelector(".legalConsentCheckboxContainer");
            legalConsentCheckboxContainer.classList.add("active");
            const reCaptcha = document.querySelector(".reCaptcha");
            reCaptcha.classList.add("active");
        },
        showDialog: function(message) {
            const dialog = document.querySelector(".dialog");
            const dialogText = document.querySelector(".dialogText");
            dialogText.innerHTML = message;
            dialog.showModal();
        }
    }

    return (
        <div className="bookConsultationForm">
            <form className="form" onSubmit={controller.handleSubmit}>

                {/* ADD IDs TO INPUT FIELDS */}

                <DatePicker 
                    className="inputField"
                    withPortal
                    minDate={tomorrow}
                    maxDate={todayPlus30Days}
                    includeDates={availableDates}
                    includeTimes={availableTimes}
                    locale={ru}
                    showTimeSelect
                    timeFormat="p"
                    placeholderText="Выбрать день"
                    onSelect={controller.handleDateSelect}
                    selected={selectedDate}
                    onChange={controller.handleDateChange}
                    dateFormat="dd.MM.yyyy, HH:mm"
                    timeCaption="Время (по МСК)"
                    id="date"
                />
                <input className="inputField" type="text" placeholder="Имя" name="name" id="name" />
                <input className="inputField" type="email" placeholder="E-mail" name="email"  />
                <input className="inputField" type="tel" placeholder="Телефон" name="phone"  onChange={controller.handleTelInputChange} />
                <div className="legalConsentCheckboxContainer">
                    <input type="checkbox" className="legalConsentCheckbox" name="legalConsentCheckbox" id="legalConsentCheckbox"  />
                    <label htmlFor="legalConsentCheckbox">Я принимаю <Link to="/terms-of-service">Условия использования</Link> и <Link to="/privacy-policy">Политику конфиденциальности</Link></label>
                </div>
                {/* <ReCAPTCHA 
                    className="reCaptcha"
                    sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY} 
                    ref={captchaRef}
                /> */}
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
            <dialog className="dialog">
                <p className="dialogText"></p>
                <form method="dialog">
                    <button className="button">
                        Закрыть
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                    </button>
                </form>
            </dialog>
        </div>
    );
};