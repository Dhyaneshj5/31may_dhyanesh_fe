import React from 'react'

function Task() {

    var text ="JSX (JavaScript XML) is a syntax in React.js that lets you write HTML-like code inside JavaScript. It's used to make creating user interfaces easier and more readable by combining HTML structure and JavaScript logic in one place. React then converts JSX into regular JavaScript that updates the web page. It simplifies development and makes code more understandable."
  return (
    <>
    
   <h1 className='m-2 p-2 bg-slate-500 text-purple-500 text-bold text-3xl'>"Welcome to JSX"</h1>
<hr />
   <p className='m-2 p-2 bg'>{text}</p>
   </>
  )
}

export default Task