import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'> A lot is happening. We are blogging about it </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Mar 15, 2023" title="Unleashing GPT-3: The AI Revolution" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Jun 28, 2023" title="Navigating the GPT-3 Landscape" />
          <Article imgUrl={blog03} date="Nov 09, 2023" title="GPT-3: The Next Frontier in AI" />
          <Article imgUrl={blog04} date="Feb 18, 2024" title="Exploring the Potential of GPT-3" />
          <Article imgUrl={blog05} date="May 22, 2024" title="GPT-3: Redefining Human-Machine Interaction" />
        </div>

      </div>
    </div>
  )
}

export default Blog