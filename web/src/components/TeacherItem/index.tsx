import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/21160525?s=460&u=25b91b8274b362edff695a70e486d9ea26d8e142&v=4" alt="Leonardo"/>
            <div>
              <strong>Leonardo Dantas</strong>
              <span>Física</span>
            </div>
          </header>
          <p>Apaixonado por games, tecnologia e ciência.
            <br /><br />
            Ao cursar Engenharia da Computação, aprendeu a fórmula "Sovetão" (S = so + vot + at²) e desde então não para de soltar palavras difíceis e explicações que ninguém entende.
          </p>
          <footer>
            <p>Preço/hora
              <strong>R$ 20,00</strong> 
            </p>
            <button type="button">
              <img src={whatsAppIcon} alt="WhatsApp ícone"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;