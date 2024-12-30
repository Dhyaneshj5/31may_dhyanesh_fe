import React from 'react'

function Theory() {
    var message= `" this is message"`

  return (
    <>
    <div className='m-2 bg-yellow-200' >
        <h1 className='p-2'>What is JSX in React.js? Why is it used?</h1>
        <hr />
        <p className='p-2'>
        JSX (JavaScript XML) is a syntax in React.js that lets you write HTML-like code inside JavaScript. It's used to make creating user interfaces easier and more readable by combining HTML structure and JavaScript logic in one place. React then converts JSX into regular JavaScript that updates the web page. It simplifies development and makes code more understandable.
        </p>
    </div>
    <div className='m-2 bg-yellow-200' >
        <h1 className='p-2'>How is JSX different from regular JavaScript? Can you write JavaScript insideJSX?</h1>
        <hr />
        <p className='p-2'>
        JSX is different from regular JavaScript because it allows you to write HTML-like code directly within JavaScript. While regular JavaScript uses functions and variables to create elements, JSX lets you use tags like code div, h1, etc., making it look similar to HTML.

Yes, you can write JavaScript inside JSX. You do this by wrapping JavaScript expressions in curly braces {}. For example, you can insert variables or functions inside JSX using curly braces  {} like this:  <h1> { message}</h1>.
        </p>
    </div>
    <div className='m-2 bg-yellow-200' >
        <h1 className='p-2'>Discuss the importance of using curly braces {} in JSX expressions.</h1>
        <hr />
        <p className='p-2'>
        In JSX, curly braces {} are used to embed JavaScript expressions inside HTML-like code. They tell React to interpret the content inside as JavaScript, not plain text. For example, you can use curly braces to insert variables, call functions, or perform calculations directly in the JSX.
        </p>
    </div>
    </>
  )
}

export default Theory