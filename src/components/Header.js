import { Link } from "react-router-dom";
import "../styles/header.css";
import Button from "@mui/material/Button";
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';

export default function Header() {
    return (
        <header className="header main">
            <div className="logoContainer">
                <Link to="/">
                    <BedroomBabyIcon />
                </Link>
            </div>
            <ul className="headerMenuContainer">
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/blog">
                        Психологические заметки
                    </Link>
                </li>
                {/* <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/consultations">
                        Консультации
                    </Link>
                </li> */}
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
        </header>
    );
}