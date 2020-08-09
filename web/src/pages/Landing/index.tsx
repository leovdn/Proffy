import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import logoutIcon from '../../assets/images/icons/logout.svg';
import './styles.css'

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const {total} = response.data;

      setTotalConnections(total);
    })
  }, [])

  return (
    <div id="page-landing">
      <div className="header">
        <div className="header-container">
          <div className="profile">
            <img src="https://github.com/leovdn.png" alt=""/>
            <span>Leonardo Dantas</span>
          </div>
          <div className="logout">
            <Link to="/home">
              <img src={logoutIcon} alt=""/>
            </Link>
          </div>
        </div>
      </div>
      <div id="page-top">
        <div className="content">

          <div className="logo-container">
            <img src={logoImg} alt="Proffy logo" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>

          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
            /> 
          </div>
              
      </div>

      <div id="page-down">
        <div className="bottom-info">
          <span className="wellcome">
            Seja bem-vindo. 
            <strong>O que deseja fazer?</strong>
          </span>
          <span className="total-connections">
            <p>Total de {totalConnections} conexões já realizadas 
            <img src={purpleHeartIcon} alt="coração roxo"/></p>
          </span>
        </div>
        <div className="buttons-container">          
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>

            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar Aulas" />
              Dar Aulas
            </Link>
          </div>          
        </div>
    </div>
  );
}

export default Landing;