import "../styles/contact.css";
import SocialLinks from "../components/SocialLinks";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

export default function Contact() {
    const captchaRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
    }

    return (
        <main className="contactPage">
            <section className="contactSection">
                <h1>Поговорим?</h1>
                <SocialLinks />
                <div className="dividerLine"></div>
                <form className="form" onSubmit={handleSubmit}>
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