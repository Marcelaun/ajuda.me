import './Navbar.css';
import { useState } from 'react';
import AjudaMeLogo from '../../assets/ajuda-me-logo.svg';
import { Link } from 'react-router-dom';
import HambMenuIcon from '../../assets/Menu/Menu_Alt.svg';
import CloseHambMenuIcon from '../../assets/Menu/Close_MD.svg';


export function Navbar() {
  const [hambMenu, setHambMenu] = useState(false);

  return (
    <nav className={hambMenu ? "navbar-responsive" : "navbar"}>
      <div className="logo-container">
        <img className="nav-logo" src={AjudaMeLogo} alt="re-cycle" />
      </div>

      <ul className={hambMenu ? "lista-links-responsive" : "lista-links"}>
        <li className="nav-links-li"><Link className="login-btn" to="/Login">Login</Link></li>
        <li className="nav-links-li"><Link className="nav-links" to="/">Home</Link></li>
        <li className="nav-links-li"><Link className="nav-links" to="/About">Sobre</Link></li>
        <li className="nav-links-li"><Link className="nav-links" to="/Contacts">Contatos</Link></li>
      </ul>

      <button className={hambMenu ? 'hamb-menu-open' : 'hamb-menu-close'} onClick={() => { setHambMenu(!hambMenu)}}>
          <img src={hambMenu ? CloseHambMenuIcon : HambMenuIcon} alt={hambMenu ? 'fechar-menu' : 'abrir-menu'} />
        </button>
    </nav>
  )
  
}