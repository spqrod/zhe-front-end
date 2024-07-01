import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/MailOutlineSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/socialLinks.css";

export default function socialLinks() {
    return (
        <div className="socialLinksContainer">
            <a href="https://wa.me/79788110255" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="socialLink"/>
            </a>
            <a href='https://t.me/zherebtsovadaria' target="_blank" rel="noopener noreferrer">
                <TelegramIcon className="socialLink"/>
            </a>
            {/* <div>
                <EmailIcon className="socialLink"/>
            </div> */}
            <a href='https://www.instagram.com/darinpsy/' target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="socialLink"/>
            </a>
        </div>
    );
}