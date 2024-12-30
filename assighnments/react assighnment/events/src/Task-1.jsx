import React, { useState } from 'react';

const ClickButton = () => {
  const [text, setText] = useState('Not Clicked');

  const handleClick = () => {
    setText('Clicked!');
  };

  return (
    <div>
      <p>{text}</p>
      <button className='btn btn-primary' onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickButton;
