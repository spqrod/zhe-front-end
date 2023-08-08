import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
    return (
        <header className="header main">
            <div className="logoContainer">
                <Link className="logoLink headerMenuLink" to="/">
                    Дарья Жеребцова
                </Link>
            </div>
            <ul className="headerMenuContainer">
                {/* <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/blog">
                        Психологические заметки
                    </Link>
                </li> */}
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/methods">
                        Методы
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/contact">
                        Связаться
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/about">
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