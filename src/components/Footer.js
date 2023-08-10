import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import SocialLinks from "./SocialLinks";

import "../styles/footer.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer main">
            <div className="footerContactsContainer">
                <SocialLinks />
            </div>
            <ul className="footerMenuContainer">
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/">
                        Домой
                    </Link>
                </li>
                {/* <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/blog">
                        Психологические заметки
                    </Link>
                </li> */}
                <li className="footerMenuItem">
                    <Link className="footerMenuLink bookingMenuLink" to="/book-consultation">
                        Запись
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/methods">
                        Методы
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/contact">
                        Связаться
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/about">
                        Обо мне
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/privacy-policy">
                        Политика конфиденциальности
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/terms-of-service">
                        Условия использования
                    </Link>
                </li>
            </ul>
            <div className="allRightsReservedContainer">
                <p>
                    Психолог Дарья Жеребцова 
                </p>
                <p>
                    Все права защищены © 2020 - { year }
                </p>

            </div>
        </footer>
    );
}