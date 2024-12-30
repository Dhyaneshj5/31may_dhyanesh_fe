import React from 'react'

function Theory() {
  return (
   <>
   <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What is conditional rendering in React? How can you conditionally render
        elements in a React component
</h1>
<hr />
<p className='p-2'>
Conditional rendering in React refers to the ability to render different elements or components based on specific conditions, such as the state or props of a component. It allows you to display dynamic content that changes according to user interaction or other conditions, making your UI more interactive and responsive.You can conditionally render elements in React using several techniques:if/else Statements , Ternary Operator  , Logical && Operator.
</p>
      </div>
      <hr />
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'>Explain how if-else, ternary operators, and && (logical AND) are used in JSXfor 
        conditional rendering
</h1>
<hr />
<p className='p-2'>
n React, conditional rendering in JSX can be achieved using if-else, ternary operators, and the logical && (AND) operator to control what elements are displayed based on certain conditions.
<h2> if-else Statements: </h2>
<p>The if-else statement is used to conditionally render different elements. However, it can't be directly used inside JSX, so you typically place the logic outside the JSX return statement. Based on the condition, either one of the elements will be returned.</p>
<h2>Ternary Operator:</h2>
<p>The ternary operator (condition ? true : false) is a shorthand for if-else. It is used directly in JSX to conditionally render one of two elements depending on the condition. It's concise and commonly used for simple conditional rendering within JSX.</p>
<h2>Logical && Operator:</h2>
<p>The && (AND) operator is used when you want to render something only if a condition is true. If the condition is false, React will render nothing (null). This is useful for simple conditions where you don't need an "else" part.</p>
</p>
      </div>

   </>
  )
}

export default Theory