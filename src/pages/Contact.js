import "../styles/contact.css";
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SocialLinks from "../components/SocialLinks";


export default function Contact() {
    return (
        <main className="contactPage">
            <section>
                <h1>Поговорим?</h1>
                <SocialLinks />
            </section>
            <section className="formSection">
                <form className="form">
                    <TextField label="Имя" variant="outlined"/>
                    <TextField label="Email" required variant="outlined" type="email"/>
                    <TextField label="Телефон" required variant="outlined" type="tel"/>
                    <TextField label="Ваше сообщение" required variant="outlined" type="text" multiline rows={5} fullWidth/>
                    <Button className="formButton" variant="contained" size="large"
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black"
                    }}>Отправить письмо</Button>
                </form>
            </section>
        </main>
    );
}