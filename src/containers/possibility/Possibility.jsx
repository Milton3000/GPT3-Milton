import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className="gpt3__possibility-content">
        <h4> Request Early Access To Get Started </h4>
        <h1 className="gradient__text">
        The Possibilities are Beyond your imagination
</h1>
<p>
  The possibilities are limitless and extend far beyond your imagination. Every journey, even the ones filled with challenges, offers opportunities for growth and exploration. Embrace every experience, for they hold the potential to enrich your life in ways you never thought possible.
</p>
        <h4> Request Early Access To Get Started </h4>
      </div>
    </div>
  );
}

export default Possibility