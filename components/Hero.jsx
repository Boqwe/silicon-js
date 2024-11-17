import React from 'react';
import appstore from '../assets/images/appstore.svg';
import googleplay from '../assets/images/googleplay.svg';
import iphoneBudget from '../assets/images/iphone-mybudget_desktop.jpg';
import iphoneCards from '../assets/images/iphone-yourcards_desktop.svg';

const Hero = () => (
  <section id="hero">
    <div className="container">
      <div className="headline">
        <h1 className="h1">Manage All Your Money in One App</h1>
      </div>
      <div className="content">
        <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
        <div className="buttons">
          <a className="btn-download-app" href="#">
            <img src={appstore} alt="Appstore" />
          </a>
          <a className="btn-download-app" href="#">
            <img src={googleplay} alt="Google play" />
          </a>
        </div>
        <a href="#" className="discover-more">
          <span className="btn-circle">
            <i className="fa fa-chevron-down"></i>
          </span>
          <span>Discover more</span>
        </a>
      </div>
      <div className="images">
        <img className="img-back" src={iphoneBudget} alt="iphone budget" />
        <img className="img-front" src={iphoneCards} alt="iphone your cards" />
      </div>
    </div>
  </section>
);

export default Hero;
