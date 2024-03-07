import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="GPT-3 excels in language tasks. Its vast neural network enables understanding and generation of human-like text. Applications range from content creation to virtual assistants. Contextual comprehension sets it apart. GPT-3 heralds a new era in AI and we invite you to follow along on the journey." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p> Explore The Library </p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Facilitates engaging conversations, enhancing user delight with seamless interactions."/>
        <Feature title="Knowledgebase" text="Provides comprehensive information and solutions, ensuring access to valuable knowledge."/>
        <Feature title="Education" text="Promotes learning and understanding through interactive experiences, empowering users to expand their knowledge."/>
      </div>
    </div>
  )
}

export default WhatGPT3