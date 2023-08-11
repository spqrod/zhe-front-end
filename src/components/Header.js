import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {

    function closeMobileMenuOnLinkClick() {
        const checkbox = document.querySelector(".hamburgerCheckbox");
        if (checkbox.checked) 
            checkbox.checked = false;
    }

    return (
        <header className="header main">
            <div className="logoContainer">
                <Link className="logoLink headerMenuLink" to="/">
                    Дарья Жеребцова
                </Link>
            </div>
            <ul className="headerMenuContainer">
                <li className="headerMenuItem bookConsultation">
                    <Link className="headerMenuLink" to="/book-consultation" onClick={closeMobileMenuOnLinkClick}>
                        Запись
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/methods" onClick={closeMobileMenuOnLinkClick}>
                        Методы
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/contact" onClick={closeMobileMenuOnLinkClick}>
                        Связаться
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/about" onClick={closeMobileMenuOnLinkClick}>
                        Обо мне
                    </Link>
                </li>
            </ul>
            <button className="button">
                <Link className="buttonLink" to="/book-consultation">
                    Записаться
                </Link>
                <div className="buttonBorder"></div>
                <div className="buttonBorder"></div>
                <div className="buttonBorder"></div>
                <div className="buttonBorder"></div>
            </button>
            <div className="hamburgerContainer">
                <input type="checkbox" className="hamburgerCheckbox" id="hamburgerCheckbox" />
                <label className="hamburgerIcon" htmlFor="hamburgerCheckbox">
                    <span className="hamburgerLine one"></span>
                    <span className="hamburgerLine two"></span>
                    <span className="hamburgerLine three"></span>
                </label>
            </div>
        </header>
    );
}