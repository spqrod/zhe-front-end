import SocialLinks from "../components/SocialLinks";
// import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
// import ru from 'date-fns/locale/ru';
import { useState } from "react";
import "../styles/bookConsultationForm.css";

export default function BookConsultationForm() {

    const captchaRef = useRef(null);
    const [dialogTextForMessageResult, setDialogTextForMessageResult] = useState("");

    const today = new Date();
    const tomorrow = new Date(today).setDate(today.getDate() + 1);
    const todayPlus30Days = new Date(today).setDate(today.getDate() + 30);

    const [selectedDate, setSelectedDate] = useState();
    const [availableTimes, setAvailableTimes] = useState([]);
    const [availableDates, setAvailableDates] = useState();
    const [dataFromDB, setDataFromDB] = useState([]);

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
                    if (data.isSuccessfullyUpdated) {
                        return true;
                    } else {
                        return false;
                    }
                });
            },
        sendEmail: function(data) {
            const fetchURL = "/api/email/booking";
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };
            return fetch(fetchURL, fetchOptions)
                .then(response => response.json())
        }
    };

    const controller = {

        handleDatePickerClick: function() {
            api.getAvailableDatesFromDB();
        },
        handleDateSelect: function(selectedDate) {
            display.updateAvailableTimes(selectedDate);
        },
        handleSubmit: async function(e) {
            e.preventDefault();
            const captchaToken = captchaRef.current.getValue();
            captchaRef.current.reset();
            const { date, name, email, phone } = e.target.elements;
            
            const formData = {
                date: date.value,
                name: name.value,
                email: email.value,
                phone: phone.value,
            }
            
            controller.sendEmailAndUpdateDateAsTaken(captchaToken, formData);
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
        sendEmailAndUpdateDateAsTaken: function(captchaToken, formData) {
            setDialogTextForMessageResult("Отправляю сообщение...");
            display.showDialog();
            api.sendEmail({ captchaToken, ...formData })
                .then((response) => {
                    display.resetFormAfterSubmit();
                    display.makeButtonInactive();
                    controller.updateDialogTextWithMessageResult(response.success);
                })
                .then(() => {
                    controller.updateDateAsTaken(formData.date);
                }).catch(error => console.log(error));
        },
        updateDialogTextWithMessageResult: function(result) {
            const successMessage = "Спасибо за запись! Я свяжусь с Вами в ближайшее время для подтверждения.";
            const failureMessage = "Простите. Что-то пошло не так. Пожалуйста, свяжитесь со мной другим способом";
            if (result) 
                setDialogTextForMessageResult(successMessage);
            else 
                setDialogTextForMessageResult(failureMessage);
        },
    }

    const display = {
        makeButtonActive: function() {
            const button = document.querySelector(".form .button");
            button.classList.remove("inactive");
            button.disabled = false;
        },
        makeButtonInactive: function() {
            const button = document.querySelector(".form .button");
            button.classList.add("inactive");
            button.disabled = true;
        },
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
        showDialog: function() {
            const dialog = document.querySelector(".dialog");
            dialog.showModal();
        },
        resetFormAfterSubmit() {
            const form = document.querySelector(".form");
            form.reset();
            const datePicker = document.querySelector(".datePicker");
            datePicker.value = "";
        },
    }

    return (
        <div className="bookConsultationForm">
            <div className="alternativeBookingMethodContainer">
                <p>Вы можете записаться, просто написав мне в мессенджере, или с помощью формы онлайн-записи:</p>
                <SocialLinks />
            </div>
            <form className="form" onSubmit={controller.handleSubmit}>
{/* 
                <DatePicker 
                    className="inputField datePicker"
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
                    onFocus={controller.handleDatePickerClick}
                    selected={selectedDate}
                    onChange={controller.handleDateChange}
                    dateFormat="dd.MM.yyyy, HH:mm"
                    timeCaption="Время (по МСК)"
                    id="date"
                /> */}
                <input className="inputField" type="text" placeholder="Имя" name="name" id="name" />
                <input className="inputField" type="email" placeholder="E-mail" name="email"  />
                <input className="inputField" type="tel" placeholder="Телефон" name="phone"  onChange={controller.handleTelInputChange} />
                <input className="inputField" type="date" placeholder="Желаемый день" name="date" id="date" />
                <div className="legalConsentCheckboxContainer">
                    <input type="checkbox" className="legalConsentCheckbox" name="legalConsentCheckbox" id="legalConsentCheckbox" required/>
                    <label htmlFor="legalConsentCheckbox" className="legalConsentLabel">
                        Я принимаю <Link to="/terms-of-service">Условия использования</Link> и <Link to="/privacy-policy">Политику конфиденциальности</Link>
                    </label>
                </div>
                <ReCAPTCHA 
                    sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY} 
                    ref={captchaRef}
                    onChange={display.makeButtonActive}
                />
                <button className="button inactive" disabled type="submit">
                    Записаться
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                    <div className="buttonBorder"></div>
                </button>
            </form>

            <dialog className="dialog">
                <p className="dialogText">{dialogTextForMessageResult}</p>
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