import "./LoginComponent.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '../../assets/google-icon.svg';

export function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="login-component-main">
      <form className="login-form">
        <h1 className="form-title">Login</h1>
        <div className="inputs-box">
        <label htmlFor="email-input" className="input-labels">Email</label>
          <input
            type="email"
            className="login-input-box"
            required
            id="email-input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password-input" className="input-labels">Senha</label>
          <input
            type="password"
            className="login-input-box"
            id="password-input"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          
        </div>

        <input type="submit" value="Entrar" className="login-submit-btn" id="loginClickSubmitButton"/>
        <button className="login-google"><h2 className="google-text">Ou entre com o google</h2> <img className="google-icon" src={GoogleIcon} alt="Google Icon" /></button>
      </form>
    </div>
  );
}
