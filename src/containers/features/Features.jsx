import React from 'react'
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: "Language Understanding",
    text: "Enhances language interpretation, improving interactions by comprehending context and sentiment."
  },
  {
    title: "Data Analysis",
    text: "Extracts insights from datasets, aiding decision-making. Analyzing trends helps optimize strategies."
  },
  {
    title: "Content Generation",
    text: "Automates high-quality content creation, streamlining processes. This feature offers scalability and efficiency."
  },
  {
    title: "Personalization",
    text: "Tailors experiences based on user preferences. Personalized recommendations and responses."
  }
];



const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'> The Future is Now. Step into Future Today & Make it Happen. </h1>
        <p> Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">

        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features