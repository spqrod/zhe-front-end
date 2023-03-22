import { Link } from "react-router-dom";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import "../styles/header.css";
import Button from "@mui/material/Button";

export default function Header() {
    return (
        <header className="header main">
            <div className="logoContainer">
                <Link to="/">
                    <LocalDiningIcon />
                </Link>
            </div>
            <ul className="headerMenuContainer">
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/rooms">
                        Rooms
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/restaurant">
                        Restaurant
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/things-to-do-in-lusaka">
                        Things To Do In Lusaka
                    </Link>
                </li>
                <li className="headerMenuItem">
                    <Link className="headerMenuLink" to="/about">
                        About
                    </Link>
                </li>
            </ul>
            <div className="headerReserveButtonContainer">
                <Button variant="contained" size="large"
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid black"
                        }}>Reserve
                </Button>
            </div>
        </header>
    );
}