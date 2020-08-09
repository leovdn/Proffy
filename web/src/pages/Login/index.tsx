import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import './styles.css';

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
          <h2>Fazer Login</h2>
          
        </form>
      </div>
    </div>
  );
}

export default Login;