import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
    const navigate = useNavigate();

    function closeMobileMenuOnLinkClick() {
        const checkbox = document.querySelector(".hamburgerCheckbox");
        if (checkbox.checked) 
            checkbox.checked = false;
    }

    function handleLogoClick(e) {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    }

    return (
        <header className="header main">

            <div className="logoContainer">
                <Link className="logoLink headerMenuLink" to="/" onClick={handleLogoClick}>
                    Дарья Жеребцова
                </Link>
            </div>
            
            <ul className="headerMenuContainer">
                <li className="headerMenuItem visibleForMobileOnly">
                    <NavLink className="headerMenuLink" to="/" onClick={closeMobileMenuOnLinkClick}>
                        Домой
                    </NavLink>
                </li>
                <li className="headerMenuItem visibleForMobileOnly">
                    <NavLink className="headerMenuLink" to="/book-consultation" onClick={closeMobileMenuOnLinkClick}>
                        Запись
                    </NavLink>
                </li>
                <li className="headerMenuItem">
                    <NavLink className="headerMenuLink" to="/methods" onClick={closeMobileMenuOnLinkClick}>
                        Методы
                    </NavLink>
                </li>
                <li className="headerMenuItem">
                    <NavLink className="headerMenuLink" to="/contact" onClick={closeMobileMenuOnLinkClick}>
                        Связаться
                    </NavLink>
                </li>
                <li className="headerMenuItem">
                    <NavLink className="headerMenuLink" to="/about" onClick={closeMobileMenuOnLinkClick}>
                        Обо мне
                    </NavLink>
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