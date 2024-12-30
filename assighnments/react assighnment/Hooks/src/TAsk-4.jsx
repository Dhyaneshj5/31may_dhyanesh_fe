import React, { useState, useRef } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0); // This triggers re-renders
  const countRef = useRef(0); // This doesn't trigger re-renders

  const incrementWithState = () => {
    setCount(count + 1); // Triggers re-render on state update
  };

  const incrementWithRef = () => {
    countRef.current += 1; // Does not trigger re-render
    console.log('Updated count (using useRef):', countRef.current);
  };

  return (
    <div className="text-center p-5">
      <h1 className="text-xl mb-4">Counter Example</h1>
      <div className="mb-4">
        <h2>State Count: {count}</h2>
        <button
          onClick={incrementWithState}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment with useState
        </button>
      </div>

      <div>
        <h2>Ref Count (no re-render): {countRef.current}</h2>
        <button
          onClick={incrementWithRef}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment with useRef
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
