import React from 'react'

function Theory() {
  return (
    <>
    <div className='border m-2 bg-yellow-200'>

        <h1 className="m-2">What are props in React.js? How are props different from state?</h1>
        <hr />
        <p className="p-2">
        In React.js, props (short for "properties") are read-only values passed from a parent component to a child component. They allow the parent to configure or customize the behavior and appearance of the child component. Props cannot be changed by the child component; they are immutable within the child. On the other hand, state is a mutable data structure managed within a component itself. State holds information that can change over time, often in response to user actions or events, and when updated, it triggers a re-render of the component. The key difference between props and state is that props are used to pass data from parent to child and are immutable within the child, while state is managed locally by the component and can be updated dynamically to reflect changes in the UI.
        </p>
    </div>
<hr />
 
<div className='border m-2 bg-yellow-200'>

<h1 className="m-2">Explain the concept of state in React and how it is used to manage componentdata.
</h1>
<hr />
<p className="p-2">
In React, state is an object that holds dynamic data for a component and determines how that component renders and behaves. Unlike props, which are passed down from parent to child components, state is managed within the component itself. It is used to store information that can change over time, such as user input, form data, or responses from an API. When the state is updated using the setState() method, React re-renders the component to reflect the changes in the UI. This allows components to be interactive and responsive to user actions. State helps manage component-specific data and ensures that the component’s UI is always in sync with its internal data.
</p>
</div>

<hr />

<div className='border m-2 bg-yellow-200'>

<h1 className="m-2">Why is this.setState() used in class components, and how does it work?

</h1>
<hr />
<p className="p-2">
In React class components, this.setState() is used to update the component's state and trigger a re-render of the component. It works by merging the new state with the current state, allowing React to efficiently update only the parts of the UI that need to change. this.setState() is asynchronous, meaning that React may batch multiple state updates for performance reasons, and the updated state may not be immediately available right after calling it. To access the updated state, you can use a callback function, which is passed as a second argument to setState(). This method ensures that the UI reflects any changes to the component’s internal state, enabling dynamic and interactive user interfaces.
</p>
</div>

    
    </>
  )
}

export default Theory