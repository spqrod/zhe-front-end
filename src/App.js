import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Methods from "./pages/Methods";
import BookConsultation from "./pages/BookConsultation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import "./styles/global.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const consultationPrice = 1200;
  const consultationLength = 40;
  const whatsAppLink = "https://wa.me/79788110255";


  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home consultationPrice={consultationPrice} consultationLength={consultationLength} whatsAppLink={whatsAppLink}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/book-consultation" element={<BookConsultation consultationPrice={consultationPrice} consultationLength={consultationLength} whatsAppLink={whatsAppLink}/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
