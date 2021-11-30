import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = () => {
  const [text, setText] = useState('> Markdown Preview');

  const handleScroll = (e) => {
    document.getElementsByClassName('html-container')[0].scrollTop =
      e.target.scrollTop;
  };

  return (
    <>
      <textarea
        className='text-container'
        name='text'
        value={text}
        id='text-area'
        onChange={(e) => setText(e.target.value)}
        onScroll={(e) => handleScroll(e)}
      ></textarea>

      <div className='html-container'>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </>
  );
};

export default Markdown;
