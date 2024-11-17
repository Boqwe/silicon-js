import React, { useState, useRef } from 'react';
import contactUsPurple from '../assets/images/contact-us-purple.svg';
import contactUsGreen from '../assets/images/contact-us-green.svg';

const FAQSection = () => {
  const faqs = [
    { question: 'Is any of my personal information stored in the App?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { question: 'What formats can I download my transaction history in?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { question: 'Can I schedule future transfers?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { question: 'When can I use Banking App services?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { question: 'Can I create my own password that is easy for me to remember?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { question: 'What happens if I forget or lose my password?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ];

  return (
    <section aria-label="faq-section" className="faq-section">
      <div className="container">
        <div className="headline-container">
          <h2 className="any-questions">Any questions? <br /> Check out the FAQs</h2>
          <p className="questions">Still have unanswered questions and need to get <br /> in touch?</p>
        </div>

        <div className="contact-us">
          <img src={contactUsPurple} alt="Contact us" />
          <img src={contactUsGreen} alt="Contact us" />
        </div>

        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-card ${isOpen ? 'open' : ''}`}>
      <div className="question" onClick={toggleFAQ}>
        <p>{question}</p>
        <button className="btn-round">
          <i className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </button>
      </div>
      <div
        ref={answerRef}
        className="answer"
        style={{
          maxHeight: isOpen ? `${answerRef.current.scrollHeight}px` : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p className="expandable">{answer}</p>
      </div>
    </div>
  );
};

export default FAQSection;
