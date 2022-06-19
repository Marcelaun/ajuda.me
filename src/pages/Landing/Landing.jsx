import './Landing.css';
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";


export function Landing() {
  return (
    <>
    <Navbar/>
    <div className="landing-page-main-container">
      <div className="description-container">
      <h1 className="landing-title">Bem vindo ao ajuda.me!</h1>
      <h2 className="landing-text"> Nosso trabalho é conectar pessoas que precisam de ajuda com quem queira ajudar.</h2>
      </div>
    </div>
    <Footer/>
    </>
  )
}