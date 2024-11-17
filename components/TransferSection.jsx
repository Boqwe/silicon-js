import React from 'react';
import iphoneLeft from '../assets/images/iPhone 12 Pro left.svg';
import iphoneFront from '../assets/images/iPhone 12 Pro.png';
import iphoneRight from '../assets/images/iPhone 12 Pro right.png';

const TransferSection = () => (
  <section aria-label="Transfer-money" className="transfer-section">
    <div className="container">
      <h2 className="h1">How Does It Work?</h2>
      
      <div className="transfer">
        <div className="transfer-item">
          <img src={iphoneLeft} alt="iphone left" />
        </div>
        <div className="transfer-item">
          <img src={iphoneFront} alt="iphone front" />
        </div>
        <div className="transfer-item">
          <img src={iphoneRight} alt="iphone right" />
        </div>
      </div>

      <div className="text">
        <h3 className="h4">Latest Transaction History</h3>
        <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
      </div>
    </div>
  </section>
);

export default TransferSection;
