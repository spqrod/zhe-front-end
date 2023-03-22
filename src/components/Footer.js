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
                <div className="footerButtonContainer">
                    <Button variant="contained" size="large" href="/book-consultation"
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid black"
                        }}>Записаться на консультацию
                    </Button>
                </div>
            </div>
            <ul className="footerMenuContainer">
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/">
                        Домой
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/blog">
                        Психологические заметки
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/consultations">
                        Консультации
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
            <p className="footerAllRightsReservedLine">
                Психолог Дарья Жеребцова © { year }. Все права защищены
            </p>
        </footer>
    );
}