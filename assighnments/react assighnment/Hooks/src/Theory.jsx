import React from 'react'

function Theory() {
  return (
    <>
    <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What are React hooks? How do useState() and useEffect() hooks work in
        functional components?
</h1>
<hr />
<p className='p-2'>
React hooks are functions that allow you to use state and lifecycle features in functional components, which were previously only available in class components. Hooks were introduced in React 16.8 to simplify component logic and improve code reuse.
</p>
<h2 className="p-2">useState(): </h2>
<p className="p-2">This hook allows you to add state to a functional component. It returns an array with two elements: the current state value and a function to update that state. You call the setter function to update the state, which triggers a re-render of the component with the new state value.</p>

<h2 className="p-2">useEffect(): </h2>
<p className="p-2">This hook lets you perform side effects (like data fetching, subscriptions, or manual DOM manipulation) in a functional component. It runs after every render, but you can control when it runs by passing dependencies as the second argument. If the dependencies change, useEffect() re-runs.

</p>
      </div>
      <hr />
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What problems did hooks solve in React development? Why are hooks
        considered an important addition to React?
</h1>
<hr />
<h2>Hooks in React solved several key problems in React development, particularly around the complexity and limitations of class components:</h2>
<p className="p-2">State Management in Functional Components: Prior to hooks, state and lifecycle features were only available in class components, making functional components less powerful. Hooks like useState and useEffect enable state management and side effects in functional components, making them as capable as class components.</p>
<p className="p-2">Code Duplication and Complexity: Class components often required repeating logic across lifecycle methods (e.g., componentDidMount, componentDidUpdate), leading to code duplication and hard-to-maintain components. Hooks simplify component logic by allowing related logic to be grouped together, making the code more modular and readable.

</p>
<p className="p-2">Component Reusability: Hooks allow stateful logic to be reused across components through custom hooks. This eliminates the need for complex patterns like higher-order components (HOCs) or render props, which could result in deeply nested or hard-to-read code.</p>
<p className="p-2">No Need for this Keyword: In class components, the use of this to access state and methods often led to confusion and bugs, especially when binding event handlers. Hooks eliminate the need for this, leading to simpler, more predictable code.</p>

<p className='p-2'>
Hooks bring functional components on par with class components in terms of capabilities while offering a simpler and more flexible API. They improve code maintainability, enable better separation of concerns, and promote a more declarative style of coding. As a result, hooks are considered a major evolution in React, making it easier to write, understand, and share React components.
</p>
      </div>
    <hr />

    <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What is useRef ? How to work in react app?
</h1>
<hr />
<p className='p-2'>
useRef is a React hook that provides a way to persist values across renders without triggering a re-render when the value changes. It returns a mutable ref object that has a current property, which can hold any value (like a DOM element or a value in your component). useRef is commonly used to access DOM elements directly, store mutable values that don't require a re-render, or keep track of the previous state in a functional component.
</p>

<h2 className='p-2'>How it works:</h2>
<p className="p2">For accessing DOM elements: useRef is often used to store a reference to a DOM element (e.g., an input or button) and allows you to interact with it directly.</p>
<p className="p2">For storing values: You can store values in ref.current that should persist across renders but don’t need to trigger a re-render, like timers, counters, or the previous state.</p>
      </div>
    </>
  )
}

export default Theory