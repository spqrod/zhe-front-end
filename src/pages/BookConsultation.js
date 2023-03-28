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
            <section className="processSection">
                <div className="processesContainer">
                    <h1>Как попасть на консультацию?</h1>
                    <ConsultationBookingProcess consultationPrice={consultationPrice} consultationLength={consultationLength} />
                </div>
            </section>
            <section className="bookingSection">
                <h2>Записаться на бесплатную ознакомительную беседу</h2>
                <form className="form">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                    <TextField label="Имя" variant="outlined"/>
                    <TextField label="Email" required variant="outlined" type="email"/>
                    <TextField label="Телефон" required variant="outlined" type="tel"/>
                    <Button className="formButton" variant="contained" size="large"
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black"
                    }}>Записаться</Button>
                </form>
                <div className="alternativeBookingMethodContainer">
                    <p>Также можете записаться, просто написав мне в:</p>
                    <SocialLinks />
                </div>
            </section>
        </main>
    );
}