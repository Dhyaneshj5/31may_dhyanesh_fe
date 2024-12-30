import React from 'react'

function Theory() {
  return (
   <>
   <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What are lifecycle methods in React class components? Describe the phases of a
        component’s lifecycle 
</h1>
<hr />
<p className='p-2'>
In React class components, lifecycle methods are special methods that allow you to run code at specific points during a component's lifecycle. The lifecycle of a React component refers to the stages through which a component goes from creation to removal. These stages are divided into three main phases: Mounting, Updating, and Unmounting.React component lifecycle methods give developers fine-grained control over the behavior of a component during its various stages. They are essential for performing tasks like initialization, handling updates, and cleaning up when a component is removed. The lifecycle is divided into three phases: Mounting (creation), Updating (changes), and Unmounting (removal). Understanding these methods helps manage side effects and optimize performance in React class components.

</p>
      </div>
      <hr />
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> Explain the purpose of componentDidMount(), 
        componentDidUpdate(),and componentWillUnmount().
</h1>
<hr />
<p className="p-2">In React class components, the lifecycle methods componentDidMount(), componentDidUpdate(), and componentWillUnmount() play key roles in managing side effects and handling changes during a component's lifecycle.</p>
<hr />
<h2 className="p-2">componentDidMount():</h2>
<p className="p-2">This method is called once, immediately after a component has been mounted (inserted into the DOM). It’s often used for tasks that require interaction with external systems, such as fetching data from an API, setting up subscriptions, or initializing libraries.</p>

<h2 className="p-2">componentDidUpdate():</h2>
<p className="p-2">This method is called after every update (when props or state change), except for the initial render. It allows you to react to state or prop changes and perform additional operations, like making API calls or updating the DOM based on the new state.</p>

<h2 className="p-2">componentWillUnmount():</h2>
<p className="p-2">This method is called just before a component is removed from the DOM, giving you a chance to clean up resources (e.g., canceling network requests, removing event listeners, or clearing timers) to prevent memory leaks.</p>
      </div>
   </>
  )
}

export default Theory