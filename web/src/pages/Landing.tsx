import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

const Landing: React.FC = () => (
  <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Logo da plataforma Happy" />

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>{process.env.REACT_APP_CITY || 'Capão Bonito'}</strong>
        <span>{process.env.REACT_APP_UF || 'São Paulo'}</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(8, 0, 0, 0.6)" />
      </Link>
    </div>
  </div>
);

export default Landing;
