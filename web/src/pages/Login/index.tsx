import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';


// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [remember, setRemember] = useState("");

// useEffect(() => {
//   console.log(remember);
// }, [remember]);


function Login() {
  return (
    <div id="page-login">
      <div className="login-cover">
          <div className="login-container">
            <img src={logoImg} alt="Proffy logo" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </div>

      <div className="login-fields">
        <form>
          <h2>Fazer login</h2>
          <Input
            inputType="text"
            name="email"
            label="E-mail"
          />

          <Input
            inputType="password"
            name="password"
            label="Senha"
            className="password-input"
          />

          <div className="remember-password">
            <input
              type="checkbox"
              id="remember-check"
              name="remember-check"
            />
            <label htmlFor="remember-check">Lembrar-me</label>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button>
            Entrar
          </button>

          <div className="form-footer">
            <h2>Nao tem conta?
              <Link to="/register">Cadastre-se</Link>
            </h2>
            <span>É de graça
            <img src={purpleHeartIcon} alt="Coração Roxo" />
            </span>            
          
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Login;