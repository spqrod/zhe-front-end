import "../styles/bookConsultation.css";
import SocialLinks from "../components/SocialLinks";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { useEffect } from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ConsultationBookingProcess from "../components/ConsultationBookingProcess";


export default function BookConsultation({consultationPrice, consultationLength}) {

    const today = new Date();
    const tomorrow = new Date(today).setDate(today.getDate() + 1);
    const todayPlus30Days = new Date(today).setDate(today.getDate() + 30);


    const availableDays = [
        new Date(2023, 3, 27, 11, 0),
        new Date(2023, 3, 27, 12, 0),
        new Date(2023, 3, 27, 13, 30),

        new Date(2023, 3, 28, 9, 0),
        new Date(2023, 3, 28, 10, 0),
        new Date(2023, 3, 28, 11, 0),
        new Date(2023, 3, 28, 11, 30),
        
        new Date(2023, 3, 29, 10, 0),
        
        new Date(2023, 4, 2, 9, 0),
        new Date(2023, 4, 7, 9, 0),
        new Date(2023, 4, 15, 9, 0),
    ];


    const [selectedDate, setSelectedDate] = useState();

    const [availableTimes, setAvailableTimes] = useState([]);

    function updateAvailableTimes(selectedDate) {
        let newArray = [];
        newArray = availableDays.filter(date => 
            ((date.getFullYear() === selectedDate.getFullYear()) 
            && (date.getMonth() === selectedDate.getMonth()) 
            && (date.getDate() === selectedDate.getDate()))
        );
        setAvailableTimes(newArray);
    }

    function handleDateSelect(selectedDate) {
        updateAvailableTimes(selectedDate);
    }

    function handleDateChange(date) {
        setSelectedDate(date)
    }

    return (
        <main className="bookConsultationPage">
            <section className="bookingSection">
                <h1>Запись на консультацию</h1>
                <form className="form">
                    <DatePicker 
                        withPortal
                        minDate={tomorrow}
                        maxDate={todayPlus30Days}
                        includeDates={availableDays}
                        includeTimes={availableTimes}
                        locale={ru}
                        showTimeSelect
                        timeFormat="p"
                        placeholderText="Выбрать день"
                        onSelect={handleDateSelect}
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd MMMM yyyy, h:mm"
                        timeCaption="Время"
                    />
                    {/* <input className="inputField time" type="text" placeholder="Выбери время" name="time" />
                    <dialog className="timeInputPopUpDialog">
                        <button type="button" className="dialogCloseButton"> <CloseIcon /> </button>
                        <p>Доступное время:</p>
                        <ul>
                        {availableDays.map(availableDay => {
                            if ((availableDay.year() === selectedDate.year())
                            && (availableDay.month() === selectedDate.month())
                            && (availableDay.day() === selectedDate.day())
                            ) {
                                return <li key={availableDay}>{availableDay.format("HH:mm")}</li>
                            }
                        })}
                        </ul>
                    </dialog> */}





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