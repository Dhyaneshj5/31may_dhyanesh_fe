import React from 'react';

const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li className='p-1 ' key={index}>{fruit}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default FruitList;
