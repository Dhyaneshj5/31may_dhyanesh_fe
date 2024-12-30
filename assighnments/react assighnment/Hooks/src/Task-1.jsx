import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="text-center p-5">
      <h1 className="text-xl mb-4">Counter: {count}</h1>
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Decrement
      </button>
      <hr />
    </div>
  );
};

export default Counter;
