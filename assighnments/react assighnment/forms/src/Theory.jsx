import React from 'react'

function Theory() {
  return (
    <>
    <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> How do you handle forms in React? Explain the concept of controlled
        components
</h1>
<hr />
<p className='p-2'>
In React, forms are handled using controlled components, which are form elements whose value is controlled by the component's state. This means that the input fields' values are not stored directly in the DOM, but rather in the component's state, and are updated through React's state management.
</p>
<h2 className='p-2' >controlled components</h2>
<p className='p-2'> A controlled component is a form element (like input, textarea, or select) where React is responsible for managing the value of the input. The input value is tied to the component's state, and any changes to the input are handled by React's onChange event. This makes React the "single source of truth" for the input value.</p>
      </div>
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'>   What is the difference between controlled and uncontrolled components in
        React?
</h1>
<hr />
<p className='p-2'>
In React, controlled components and uncontrolled components refer to two different ways of managing form input elements, and the key difference lies in how the form data is handled.

<h2 className='p-2'> Controlled Components: </h2>
<p className="p-2">In controlled components, the form input elements' values are controlled by React state. The value of the input is set by the component's state, and any changes to the input are handled by updating the state through event handlers (e.g., onChange). This means React is the "single source of truth" for the input data.</p>

<hr />
<h2 className='p-2'> ConUncontrolled Components: </h2>
<p className="p-2">In uncontrolled components, form elements manage their own state internally. React doesn't control or store the value of the input; instead, the DOM itself keeps track of the input value. You can access the current value of an uncontrolled component using ref in React.</p>
</p>

<hr />
<h2 className='p-2'> Difference </h2>
<p className="p-2">Controlled components store their value in React state, while uncontrolled components store their value in the DOM. Controlled components provide more control and integration with React, making them easier to manage and validate. Uncontrolled components are often simpler and require less boilerplate but don't offer the same level of control.</p>


      </div>

    

    </>
  )
}

export default Theory