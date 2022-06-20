import "./Footer.css";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/ajuda-me-logo.svg";
import WhatsappImg from "../../assets/whatsapp.svg";

export function Footer() {
  return (
    <footer className="footer-main-container">
      <div className="content-display">
        <div className="links-container">
          <h1 className="footer-links-title">Informações e contatos.</h1>
          <ul className="footer-links">
            <li className="footer-links-list">
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li className="footer-links-list">
              <Link className="links" to="/About">
                Sobre
              </Link>
            </li>
          </ul>

          <a href="mailto:recycle348@gmail.com" className="links-send">
            Envie nos um e-mail.
          </a>
        </div>

        <div className="links-container">
          <h1 className="footer-links-title">Nossas redes sociais.</h1>

          <div className="social-media-container">
            <div className="social-media-links">
              <a
                className="social-media-links-send"
                href="https://wa.me/5531991151126"
                target="__blank"
                rel="noopener noreferrer"
              >
                <h2 className="social-media-name">
                  Whatsapp: &#40;31&#41;991151126
                </h2>
                <img src={WhatsappImg} alt="Whatsapp" />
              </a>
            </div>
          </div>
        </div>

        <div className="links-container">
          <h1 className="footer-links-title">Visite-nos.</h1>

          <address className="endereco">
            Rua Trazíbulo Jason, N° 1143 <br />
            Bairro São Pedro, <br />
            CEP: 39900-000, <br />
            Almenara - MG,
            <a
              target="__blank"
              rel="noopener noreferrer"
              className="links-send"
              href="https://goo.gl/maps/F77QJHY1CHsVVBuA7"
            >
              Endereço google maps
            </a>
          </address>
        </div>

        <div className="logo-svg">
          <img className="logo-img" src={LogoImg} alt="re-cycle" />
        </div>
      </div>
    </footer>
  );
}
