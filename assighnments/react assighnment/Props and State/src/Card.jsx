import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './Task-1'; 

const App = () => {
  return (
    <div>
      <UserCard name="John Doe" age={30} location="New York" />
      <UserCard name="Jane Smith" age={25} location="San Francisco" />
    </div>
  );
};

export default App
