import React from 'react';
import logos from '../assets/images/manylogos.svg';
import logostablet from '../assets/images/logostablet.svg';

const Logos = () => (
  <section id="logos">
    <div className="container">
      <img className="logos" src={logos} alt="multiple logos" />
      <img className="logostablet" src={logostablet} alt="logo tablet" />
    </div>
  </section>
);

export default Logos;
