import "../styles/bookConsultation.css";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import "react-datepicker/dist/react-datepicker.css";

import ConsultationBookingProcess from "../components/ConsultationBookingProcess";
import BookConsultationForm from "../components/BookConsultationForm";

export default function BookConsultation({consultationPrice, consultationLength}) {

    return (
        <main className="bookConsultationPage">
            <section className="bookingSection">
                <h1>Запись на 15-ти минутную беседу</h1>
                <BookConsultationForm />
            </section>
            <section className="processSection">
                <h1>Как происходит работа?</h1>
                <ConsultationBookingProcess consultationPrice={consultationPrice} consultationLength={consultationLength} />
            </section>



        </main>
    );
}