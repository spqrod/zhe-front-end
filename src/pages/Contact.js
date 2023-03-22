import "../styles/contact.css";
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";


export default function Contact() {
    return (
        <main className="contactPage">
            <section>
                <h1>Get In Touch!</h1>
                <div className="contactOptionsContainer">
                    <div className="contactOptionsItem">
                        <PhoneIcon sx={{fontSize: "50px"}}/>
                        <a href='tel:+260955864440'>+260 95 5864440</a>
                    </div>
                    <div className="contactOptionsItem">
                        <PlaceIcon sx={{fontSize: "50px"}}/>
                        <p>Lusaka, Zambia</p>
                    </div>
                    <div className="contactOptionsItem">
                        <WhatsAppIcon sx={{fontSize: "50px"}}/>
                        <a href='https://wa.me/+260955864440'>+260 95 5864440</a>
                    </div>
                </div>
            </section>
            <section className="formSection">
                <form className="form">
                    <TextField label="Name" variant="outlined"/>
                    <TextField label="Email" required variant="outlined" type="email"/>
                    <TextField label="Phone" required variant="outlined" type="tel"/>
                    <TextField label="Your message" required variant="outlined" type="text" multiline rows={5} fullWidth/>
                    <Button className="formButton" variant="contained" size="large"
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black"
                    }}>Send Message</Button>
                </form>
            </section>
        </main>
    );
}