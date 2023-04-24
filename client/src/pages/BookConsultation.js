import "../styles/bookConsultation.css";
import SocialLinks from "../components/SocialLinks";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import ConsultationBookingProcess from "../components/ConsultationBookingProcess";

const tomorrow = dayjs().add(1, "day");
const todayPlus30Days = dayjs().add(1, "month");

const availableDays = [
    dayjs().add(2, "days"),
    dayjs().add(3, "days"),
    dayjs().add(4, "days"),
    dayjs().add(6, "days"),
    dayjs().add(8, "days"),
    dayjs().add(10, "days"),
];
console.clear();

const isDateAvailable = (date) => {
    const initialValue = true;
    const result = availableDays.reduce((accumulator, currentValue) => {
        if (dayjs(currentValue).isSame(date, "day")) {
            accumulator = false;
            return accumulator;
        }
        return accumulator;
    }, initialValue);

    return result;
}


export default function BookConsultation({consultationPrice, consultationLength}) {
    return (
        <main className="bookConsultationPage">
            <section className="bookingSection">
                <h1>Запись на консультацию</h1>
                <form className="form">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker disablePast minDate={tomorrow} maxDate={todayPlus30Days} shouldDisableDate={isDateAvailable}/>
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