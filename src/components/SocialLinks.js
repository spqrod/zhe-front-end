import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/socialLinks.css";

export default function socialLinks() {
    return (
        <div className="socialLinksContainer">
            <div>
                <WhatsAppIcon className="socialLink"/>
            </div>
            <div>
                <TelegramIcon className="socialLink"/>
            </div>
            <div>
                <EmailIcon className="socialLink"/>
            </div>
            <div>
                <InstagramIcon className="socialLink"/>
            </div>
        </div>
    );
}