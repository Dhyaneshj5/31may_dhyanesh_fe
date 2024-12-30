import React, { useState } from 'react';

const DynamicInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form className=''>
        <label className='border'>
          Type something:
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
          />
        </label>
      </form>
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default DynamicInput;
