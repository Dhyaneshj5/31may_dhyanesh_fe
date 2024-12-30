import React from 'react'

function Theory() {
  return (
    <>
    <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> How are events handled in React compared to vanilla JavaScript? Explain the
        concept of synthetic events
</h1>
<hr />
<p className='p-2'>
In React, events are handled differently from vanilla JavaScript due to the abstraction provided by React's event system. While in vanilla JavaScript, events are bound directly to DOM elements using methods like addEventListener, React uses a declarative approach where event handlers are passed as props (e.g., onClick, onChange) to components. React then manages these events through a system known as Synthetic Events.

</p>
<p className="p-2">Synthetic events are a cross-browser wrapper around the browser's native event system. They normalize event properties across different browsers, providing consistent behavior for events like click, submit, keypress, etc. Synthetic events in React are pooled, meaning the event objects are reused and cleared after the event handler runs. This improves performance, but it also means you can't access the event asynchronously (e.g., inside a setTimeout) without calling event.persist() to keep the event alive.</p>


  </div>
      <hr />
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What are some common event handlers in React.js? Provide examples of
        onClick, onChange, and onSubmit. 
</h1>
<hr />
<p className='p-2'>
In React, common event handlers include onClick, onChange, and onSubmit. These handlers correspond to user interactions and are used to trigger specific actions in your components.
</p>

<ul>
    <li>onClick: This event handler is used to respond to mouse click events. It's typically used with buttons, divs, or other clickable elements.</li>
    <li>onChange: This event handler is used with form elements like input fields, select boxes, and text areas to handle changes in their values. It is commonly used in controlled components to update the state based on user input.</li>
    <li>onSubmit: This handler is used to handle form submission events. It is often used in forms to prevent the default form submission behavior and perform custom actions like validation or API calls.</li>
   
</ul>
      </div> 
      <hr />


      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> Why do you need to bind event handlers in class components?
</h1>
<hr />
<p className='p-2'>
In React class components, event handlers need to be bound to the component instance to ensure that the this keyword refers to the correct context (the class instance) when the handler is called. By default, methods in class components are not automatically bound to the instance, so if you don't explicitly bind the event handler, this will be undefined or refer to the wrong context, causing issues when trying to access the component's state or methods. Binding the handler ensures that this correctly refers to the component instance, allowing you to use state and other methods within the event handler.

</p>



  </div>
    </>
  )
}

export default Theory