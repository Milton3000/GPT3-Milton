import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding" id="home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> Let's Build Something Amazing with GPT-3 OpenAI</h1>
        <p> Introducing GPT-3, the latest advancement in artificial intelligence. With its remarkable capabilities, GPT-3 excels in natural language understanding and generation. It can assist in various tasks, offering unparalleled versatility and accuracy. GPT-3 represents a significant leap forward in AI technology, promising to revolutionize industries and enhance user experiences.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'> Get Started </button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p> 2,600 people requested access to visit the last 24 hours.</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header