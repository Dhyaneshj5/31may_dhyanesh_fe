import React from 'react';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

class WelcomeMessage extends React.Component {
  render() {
    return <h1>Welcome to React!</h1>;
  }
}

export { Greeting, WelcomeMessage };
