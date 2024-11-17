import React from 'react';
import notificationIcon from '../assets/images/notification.svg';
import emailIcon from '../assets/images/email.svg';

const SubscribeSection = () => (
  <section className="subscribe-section">
    <div className="subscribe">
      <div className="notification">
        <img src={notificationIcon} alt="Notification Icon" />
        <h2 className="text">Subscribe to our newsletter to stay informed about latest updates</h2>
      </div>
      <div className="wrapper">
        <div className="input-group">
          <img className="icon" src={emailIcon} alt="Email Icon" />
          <input type="email" className="form-input email" placeholder="Your Email" />
          <button className="btn-subscribe">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
);

export default SubscribeSection;
