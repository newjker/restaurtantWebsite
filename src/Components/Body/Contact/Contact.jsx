import "./Contact.css";
import Details from "./Contact Details/ContactDetail";
import ContactText from "./Contact Info/ContactrInfo";
import Footer from "./Footer/Footer";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Details />
      <ContactText />
      <Footer />
    </div>
  );
};

export default Contact;
