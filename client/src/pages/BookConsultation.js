import "../styles/bookConsultation.css";
import SocialLinks from "../components/SocialLinks";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useEffect } from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import ConsultationBookingProcess from "../components/ConsultationBookingProcess";


export default function BookConsultation({consultationPrice, consultationLength}) {

    const tomorrow = dayjs().add(1, "day");
const todayPlus30Days = dayjs().add(1, "month");

const availableDays = [
    dayjs().add(5, "days").hour(13).minute(15).second(0),
    dayjs().add(2, "days").hour(14).minute(15).second(0),
    dayjs().add(2, "days").hour(15).minute(30).second(0),
    dayjs().add(3, "days").hour(9).minute(0).second(0),
    dayjs().add(4, "days").hour(10).minute(0).second(0),
    dayjs().add(4, "days").hour(16).minute(0).second(0),
    dayjs().add(5, "days").hour(16).minute(0).second(0),
    dayjs().add(5, "days").hour(17).minute(0).second(0),
];


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
    
    function handleDateSelection(newValue) {
        setSelectedDate(newValue);
        revealTimeInputField();
        console.log(newValue);
    }

    function revealTimeInputField() {
        const inputFieldTime = document.querySelector(".inputField.time");
        inputFieldTime.classList.add("revealed");
    }

    const [selectedDate, setSelectedDate] = useState(availableDays[0]);

    useEffect(() => {



        

        const revealTimeInputPopUpDialog = () => {

            const timeInputPopUpDialog = document.querySelector(".timeInputPopUpDialog");
            timeInputPopUpDialog.removeAttribute("open");
            timeInputPopUpDialog.showModal();

            const dialogCloseButton = document.querySelector(".dialogCloseButton");
            dialogCloseButton.addEventListener("click", () => {
                timeInputPopUpDialog.close();
            });
        }

        const inputFieldTime = document.querySelector(".inputField.time");
        inputFieldTime.addEventListener("click", revealTimeInputPopUpDialog);

    });

    return (
        <main className="bookConsultationPage">
            <section className="bookingSection">
                <h1>Запись на консультацию</h1>
                <form className="form">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker 
                            className="inputDatePicker"
                            disablePast 
                            minDate={tomorrow} 
                            maxDate={todayPlus30Days} 
                            shouldDisableDate={isDateAvailable}
                            orientation="portrait"
                            label="Выбери день"
                            onAccept={newValue => handleDateSelection(newValue)}
                        />
                    </LocalizationProvider>
                    <input className="inputField time" type="text" placeholder="Выбери время" name="time" />
                    <dialog className="timeInputPopUpDialog">
                        <button type="button" className="dialogCloseButton"> <CloseIcon /> </button>
                        <p>Доступное время:</p>
                    </dialog>


                    <ul>
                        {availableDays.map(availableDay => {
                            if ((availableDay.year() == selectedDate.year())
                            && (availableDay.month() == selectedDate.month())
                            && (availableDay.day() == selectedDate.day())
                            ) {
                                return <li key={availableDay}>{availableDay.format("HH:mm")}</li>
                            }
                        })}
                    </ul>


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