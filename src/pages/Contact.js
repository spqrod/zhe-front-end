import "../styles/contact.css";
import SocialLinks from "../components/SocialLinks";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

export default function Contact() {
    const captchaRef = useRef(null);
    const [dialogTextForMessageResult, setDialogTextForMessageResult] = useState("");

    const api = {
        
        sendEmail: function(data) {
            const fetchURL = "/api/contact";
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

        handleSubmit: async function(e) {
            e.preventDefault();
            const token = captchaRef.current.getValue();
            captchaRef.current.reset();

            const { name, email, phone, formMessage } = e.target.elements;
            
            const formData = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                formMessage: formMessage.value,
            }
            
            controller.sendEmail({ token, ...formData });
        },
        updateDialogTextWithMessageResult: function(result) {
            const successMessage = "Спасибо за сообщение! Я свяжусь с Вами в ближайшее время.";
            const failureMessage = "Простите. Что-то пошло не так. Пожалуйста, свяжитесь со мной другим способом";
            if (result) 
                setDialogTextForMessageResult(successMessage);
            else 
                setDialogTextForMessageResult(failureMessage);
        },
        sendEmail: function(data) {
            setDialogTextForMessageResult("Отправляю сообщение...");
            display.showDialog();
            api.sendEmail(data)
                .then((response) => {
                    display.resetFormAfterSubmit();
                    display.makeButtonInactive();
                    controller.updateDialogTextWithMessageResult(response.success);
                });
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
                    <input className="inputField" type="tel" placeholder="Телефон" name="phone" required/>
                    <textarea className="textArea" placeholder="Ваше сообщение" name="formMessage" />
                    <div className="legalConsentCheckboxContainer">
                        <input type="checkbox" className="legalConsentCheckbox" name="legalConsentCheckbox" id="legalConsentCheckbox" required onChange={display.makeButtonActive}/>
                        <label className="legalConsentLabel" htmlFor="legalConsentCheckbox">
                            Я принимаю <Link to="/terms-of-service">Условия использования</Link> и <Link to="/privacy-policy">Политику конфиденциальности</Link>
                        </label>
                    </div>
                    <ReCAPTCHA 
                        sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY} 
                        ref={captchaRef}
                        onChange={display.makeButtonActive}
                    />
                    <button className="button inactive" type="submit" disabled>
                        Отправить сообщение
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
            </section>
        </main>
    );
}