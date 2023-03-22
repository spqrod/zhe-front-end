import { Link } from "react-router-dom";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import "../styles/footer.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer main">
            <div className="footerContactsContainer">
                <div className="footerContactsItem">
                    Phone
                </div>
                <div className="footerContactsItem">
                    Address
                </div>
                <div className="footerContactsItem">
                    Email
                </div>
                <div className="footerContactsItem">
                    WhatsApp
                </div>
            </div>
            <ul className="footerMenuContainer">
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/">
                        Home
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/rooms">
                        Rooms
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/restaurant">
                        Restaurant
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/things-to-do-in-lusaka">
                        Things To Do In Lusaka
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/about">
                        About
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/privacy-policy">
                        Privacy Policy
                    </Link>
                </li>
                <li className="footerMenuItem">
                    <Link className="footerMenuLink" to="/terms-of-service">
                        Terms Of Service
                    </Link>
                </li>
            </ul>
            <p>
                The Sunningdale House © { year }. All Rights Reserved
            </p>
        </footer>
    );
}