import "./Landing.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { LandingMap } from "../../components/LandingMap/LandingMap";
import LocationSvg from "../../assets/location.svg";

export function Landing() {
  return (
    <>
      <Navbar />
      <div className="landing-page-main-container">
        <div className="description-container">
          <h1 className="landing-title">Bem vindo ao ajuda.me!</h1>
          <h2 className="landing-text-orange">
            {" "}
            Nosso trabalho é conectar pessoas que precisam de ajuda com pessoas
            que queiram ajudar.
          </h2>

          <div className="img-desc">
            <h2 className="landing-text">
              Utilizando um mapa da região almenarense, exibimos a localização
              de pessoas em situações de necessidade
            </h2>
            <div className="img-desc-box">
              <h2 className="img-desc-text">
                Cadastre localizações ou veja outras disponíveis.
              </h2>
              <img src={LocationSvg} alt="Figura 1" className="location-img" />
            </div>
          </div>
          <div className="map-container">
            <LandingMap />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
