import './About.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import QuestionImg from '../../assets/undraw_questions.svg';
import MapImg from '../../assets/undraw_map.svg';

export function About() {
  return (
    <>
    <Navbar/>
    <div className="about-main-container">
      <section className="presentation-box">
        <h2 className="about-title">Quem somos?</h2>
        <div className="content-box">
          <h3 className="presentation-text">Somos pessoas que tiveram uma simples ídeia para ajudar de alguma forma outros em situações de vulnerabilidade, criamos então uma plataforma onde você poderá encontrar diretamente essas pessoas e ajudá-las da forma que puder sem depender de algum terceiro para isso.</h3>
          <img src={QuestionImg} alt="Icone-Pergunta" className="question-img" />
        </div>

        <div className="content-box">
          <h3 className="presentation-text">Nosso único trabalho é mapear estes locais e apresentá-los com consentimento das pessoas envolvidas para auxiliar as pessoas que desejam ajudar, a encontrar quem queira receber algum apoio.</h3>
          <img src={MapImg} alt="Map-Icon" className="question-img" />
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}