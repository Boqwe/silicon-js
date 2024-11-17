import React from 'react';
import './App.css'
import './assets/css/style.css'

import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/logos';
import Features from './components/Features';
import TransferSection from './components/TransferSection';
import PaymentSection from './components/PaymentSection';
import Reviews from './components/Reviews';
import FAQSection from './components/FAQSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />
        <TransferSection />
        <PaymentSection />
        <Reviews />
        <FAQSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
