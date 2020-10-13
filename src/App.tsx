import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoimg from './images/logo.svg';

const App: React.FC = () => (
  <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoimg} alt="Happy" />

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="locations">
        <strong>Tatuí</strong>
        <span>São Paulo</span>
      </div>

      <a href="" className="enter-app">
        >
      </a>
    </div>
  </div>
);

export default App;
