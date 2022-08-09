
import './Contacts.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import ContactsImg from '../../assets/undraw_contacts.svg';
import WhatsappImg from '../../assets/whatsapp.svg';


export function Contacts() {
  return (
    <>
    <Navbar/>
    <section className="contacts-main-container">
      <div className="contacts-box">
        <div className="text-box">
        <h3 className="contacts-text">Obrigado pelo interesse em nos contatar!</h3>
       
        </div>

        <div className="contacts-list">
        <a
                className="contacts-social-media-links"
                href="https://wa.me/5531991151126"
                target="__blank"
                rel="noopener noreferrer"
              >
                <h2 className="contacts-social-media-name">
                  Whatsapp: &#40;31&#41;991151126
                </h2>
                <img src={WhatsappImg} alt="Whatsapp" />
              </a>

              <a href="mailto:recycle348@gmail.com" className="email-link">
            Nosso email de contato.<br/>
            recycle348@gmail.com
          </a>
        </div>
      </div>

      <img src={ContactsImg} alt="Contacts-Img" className="contacts-img" />
    </section>
    <Footer/>
    </>

  )
}