import React from 'react'

function Theory() {
  return (
    
      <>
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What are components in React? Explain the difference between functional
        components and class components.
</h1>
<hr />
<p className='p-2'>
Components in React are the building blocks of a React application, used to split the UI into reusable, independent pieces. They can be thought of as JavaScript functions or classes that return JSX to define how the UI should look and behave. There are two types of components: functional components and class components.
</p>
<p className='p-2'>
Functional components are simple JavaScript functions that accept props and return JSX, making them lightweight and easy to read. With the introduction of React Hooks, functional components can manage state and lifecycle methods, which were previously limited to class components. Class components, on the other hand, are ES6 classes that extend React.Component, using methods like render() to return JSX and managing state or lifecycle methods within the class. Functional components are now preferred in modern React due to their simplicity and better performance.
</p>
      </div>
      <hr />
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> How do you pass data to a component using props?
</h1>
<hr />
<p className='p-2'>
In React, you pass data to a component using props (short for properties), which are similar to function arguments. Props are passed from a parent component to a child component as attributes in JSX. Inside the child component, these props can be accessed using the props object or destructured for easier usage. Props are read-only, meaning the child component cannot modify them.
</p>

      </div>
      <hr />
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What is the role of render() in class components?
</h1>
<hr />
<p className='p-2'>
n React class components, the render() method is essential as it defines what the component should display on the screen. It returns JSX, which React then converts into DOM elements. The render() method is called automatically during the component's lifecycle, such as when the component mounts or updates. It should be a pure function, meaning it depends only on the component's props and state to produce the output, ensuring predictable rendering of the UI.
</p>

      </div>
      
      
      </>
  )
}

export default Theory