import React from 'react';
import iphoneYourCard from '../assets/images/iphone-yourcard2.svg';
import cardlogo from '../assets/images/cardlogo.svg';
import datasecurity from '../assets/images/datasecurity.svg';
import statistics from '../assets/images/cost statistics.svg';
import support from '../assets/images/support.svg';
import cashback from '../assets/images/regular-cashback.svg';
import standards from '../assets/images/top-standards.svg';

const Features = () => (
  <section aria-label="App-Features" className="features">
    <div className="container">
      <div className="iphone">
        <img src={iphoneYourCard} alt="iPhone with credit card" />
      </div>
      <div className="text">
        <h2 className="h1">App Features</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.</p>
        <div className="features-grid">
          <FeatureCard icon={cardlogo} title="Easy Payments" description="Id mollis consectetur congue egestas egestas suspendisse blandit justo." />
          <FeatureCard icon={datasecurity} title="Data Security" description="Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non." />
          <FeatureCard icon={statistics} title="Cost Statistics" description="Mattis urna ultricies non amet, purus in auctor non." />
          <FeatureCard icon={support} title="Support 24/7" description="A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris." />
          <FeatureCard icon={cashback} title="Regular Cashback" description="Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend." />
          <FeatureCard icon={standards} title="Top Standards" description="Faucibus cursus maecenas lorem cursus nibh." />
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="features-card">
    <div className="icon-container">
      <img src={icon} alt={title} />
    </div>
    <div>
      <h3 className="h5">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Features;

