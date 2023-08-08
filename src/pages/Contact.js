import "../styles/contact.css";
import SocialLinks from "../components/SocialLinks";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

export default function Contact() {
    const captchaRef = useRef(null);







    const api = {
        sendEmail: function(data) {
            const fetchURL = "/api/email/contact";
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };
            return fetch(fetchURL, fetchOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("data from fetch");
                    console.log(data);
            });
        }
    };

    const controller = {

        handleSubmit: async function(e) {
            e.preventDefault();
            // const token = captchaRef.current.getValue();
            // captchaRef.current.reset();

            const { name, email, phone, message } = e.target.elements;
            
            const formData = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value
            }
            
            controller.sendEmail(formData);
                // controller.showDialog(result);
                // display.resetFormAfterSubmit();
        },
        showDialog: function(result) {
            const successMessage = "Спасибо за сообщение! Я свяжусь с Вами в ближайшее время.";
            const failureMessage = "Простите. Что-то пошло не так. Пожалуйста, свяжитесь со мной другим способом";
            if (result) 
                display.showDialog(successMessage);
            else 
                display.showDialog(failureMessage);
        },
        sendEmail: function(data) {
            api.sendEmail(data);
        }
    }

    const display = {
       
        revealConsentCheckboxAndReCaptcha: function() {
            const legalConsentCheckboxContainer = document.querySelector(".legalConsentCheckboxContainer");
            legalConsentCheckboxContainer.classList.add("active");
            const reCaptcha = document.querySelector(".reCaptcha");
            reCaptcha.classList.add("active");
        },
        showDialog: function(message) {
            const dialog = document.querySelector(".dialog");
            const dialogText = document.querySelector(".dialogText");
            dialogText.innerText = message;
            dialog.showModal();
        },
        resetFormAfterSubmit() {
            const form = document.querySelector(".form");
            form.reset();
        }
    }










    return (
        <main className="contactPage">
            <section className="contactSection">
                <h1>Поговорим?</h1>
                <SocialLinks />
                <div className="dividerLine"></div>
                <form className="form" onSubmit={controller.handleSubmit}>
                    <input className="inputField" type="text" placeholder="Имя" name="name" />
                    <input className="inputField" type="email" placeholder="E-mail" name="email" required />
                    <input className="inputField" type="tel" placeholder="Телефон" name="phone" />
                    <textarea className="textArea" placeholder="Ваше сообщение" name="message" />
                    <div className="legalConsentCheckboxContainer">
                        <input type="checkbox" className="legalConsentCheckbox" name="legalConsentCheckbox" id="legalConsentCheckbox" required />
                        <label htmlFor="legalConsentCheckbox">
                            Я принимаю <Link to="/terms-of-service">Условия использования</Link> и <Link to="/privacy-policy">Политику конфиденциальности</Link>
                        </label>
                    </div>
                    <ReCAPTCHA 
                        sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY} 
                        ref={captchaRef}
                    />
                    <button className="button">
                        <Link className="buttonLink">
                            Отправить сообщение
                        </Link>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                    </button>
                </form>
            </section>
        </main>
    );
}