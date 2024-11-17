import React from 'react';
import balanceForecast from '../assets/images/balance-picture.svg';
import learnMoreBtn from '../assets/images/learn-more-btn.svg';
import contacts from '../assets/images/contacts.svg';
import cardLogo from '../assets/images/cardlogo.svg';
import cashbackLogo from '../assets/images/regular-cashback.svg';

const PaymentSection = () => (
  <section aria-label="Payment Section" className="payment-section">
    <div className="container">
      
      {/* Text Content */}
      <div className="text">
        <h2>Make your money transfer simple and clear</h2>
        
        <div className="checkbox">
          <i className="fa-regular fa-circle-check icon"></i>
          <p className="checkbox-text">Banking transactions are free for you</p>
        </div>
        
        <div className="checkbox">
          <i className="fa-regular fa-circle-check icon"></i>
          <p className="checkbox-text">No monthly cash commission</p>
        </div>
        
        <div className="checkbox">
          <i className="fa-regular fa-circle-check icon"></i>
          <p className="checkbox-text">Manage payments and transactions online</p>
        </div>
        
        {/* Learn More Button */}
        <div className="btn-learn-more">
          <img src={learnMoreBtn} alt="Learn more about payment options" />
        </div>
      </div>
      
      {/* Image Container */}
      <div className="image-container">
        <img className="balance-forecast" src={balanceForecast} alt="Balance and card overview" />
      </div>

      {/* Contacts and Logos Section */}
      <div className="contacts-logos-wrapper">
        
        <div className="contacts">
          <img src={contacts} alt="Contact options" />
        </div>

        <div className="logos-section">
          <div className="headline">
            <h2 className="h1">Receive payment from<br />international bank details</h2>
          </div>
          
          <div className="logos">
            <div className="left-column">
              <div className="logo-item card">
                <img className="logo-picture" src={cardLogo} alt="Card services logo" />
                <p>Manage your payments online.<br /> Mollis congue egestas egestas<br /> fermentum fames.</p>
              </div>
            </div>
            
            <div className="right-column">
              <div className="logo-item cashback">
                <img className="logo-picture" src={cashbackLogo} alt="Cashback services logo" />
                <p>A elementum imperdiet enim,<br /> pretium etiam facilisi aenean<br /> quam mauris.</p>
              </div>
            </div>
          </div>
          
          {/* Second Learn More Button */}
          <div className="btn-learn">
            <img src={learnMoreBtn} alt="Learn more about international payment options" />
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
);

export default PaymentSection;

