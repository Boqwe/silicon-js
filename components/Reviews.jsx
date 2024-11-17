import React from 'react';
import quotesIcon from '../assets/images/quotes.svg';
import ratingIcon from '../assets/images/rating.svg';
import manEmoji from '../assets/images/man-emoji.svg';
import femaleEmoji from '../assets/images/female-emoji.svg';

const Reviews = () => (
  <section aria-label="Reviews" className="reviews">
    <div className="container">
      <h2 className="rubrik">Clients are <br /> Loving Our App</h2>
      <div className="reviews-container">
        <ReviewCard
          quote={quotesIcon}
          rating={ratingIcon}
          text="Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc."
          emoji={manEmoji}
          name="Fannie Summers"
          description="Designer"
        />
        <ReviewCard
          quote={quotesIcon}
          rating={ratingIcon}
          text="Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc."
          emoji={femaleEmoji}
          name="Albert Flores"
          description="Developer"
        />
      </div>
    </div>
  </section>
);

const ReviewCard = ({ quote, rating, text, emoji, name, description }) => (
  <div className="textbox">
    <div className="quote">
      <img src={quote} alt="Quotes icon" />
    </div>
    <div className="rating">
      <img src={rating} alt="Rating" />
    </div>
    <p>{text}</p>
    <div className="emoji">
      <img src={emoji} alt={`${name} emoji`} />
    </div>
    <div className="name">
      <h5>{name}</h5>
      <p className="description">{description}</p>
    </div>
  </div>
);

export default Reviews;
