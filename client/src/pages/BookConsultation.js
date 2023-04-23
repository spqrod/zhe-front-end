import "../styles/bookConsultation.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SocialLinks from "../components/SocialLinks";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ConsultationBookingProcess from "../components/ConsultationBookingProcess";



export default function BookConsultation({consultationPrice, consultationLength}) {
    return (
        <main className="bookConsultationPage">
            <section className="bookingSection">
                <h1>Запись на консультацию</h1>
                <form className="form">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                    <input className="inputField" type="text" placeholder="Имя" name="name" />
                    <input className="inputField" type="email" placeholder="E-mail" name="email" required />
                    <input className="inputField" type="tel" placeholder="Телефон" name="phone" />
                    <button className="button" type="submit">
                        Записаться
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                        <div className="buttonBorder"></div>
                    </button>
                </form>
                <div className="alternativeBookingMethodContainer">
                    <p>Вы также можете записаться, просто написав мне в:</p>
                    <SocialLinks />
                </div>
            </section>
            <section className="processSection">
                <h1>Как попасть на консультацию?</h1>
                <ConsultationBookingProcess consultationPrice={consultationPrice} consultationLength={consultationLength} />
            </section>

        </main>
    );
}