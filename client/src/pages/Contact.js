import "../styles/contact.css";
import SocialLinks from "../components/SocialLinks";
import { Link } from "react-router-dom";


export default function Contact() {
    return (
        <main className="contactPage">
            <section>
                <h1>Поговорим?</h1>
                <h2>
                    Свяжитесь со мной в социальных сетях
                </h2>
                <SocialLinks />
            </section>
            <section className="formSection">
                <h2>
                    Или заполните онлайн-форму
                </h2>
                <form className="form">
                    {/* <div className="inputContainer"> */}
                    <input className="inputField" type="text" placeholder="Имя" name="name" />
                    <input className="inputField" type="email" placeholder="E-mail" name="email" required />
                    <input className="inputField" type="tel" placeholder="Телефон" name="phone" />
                    <textarea className="textArea" placeholder="Ваше сообщение" name="message" />

                    {/* </div> */}
                    {/* <TextField label="Имя" variant="filled"/> */}
                    {/* <TextField label="Email" required variant="filled" type="email"/> */}
                    {/* <TextField label="Телефон" required variant="filled" type="tel"/> */}
                    {/* <TextField label="Ваше сообщение" required variant="filled" type="text" multiline rows={5} fullWidth/> */}
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