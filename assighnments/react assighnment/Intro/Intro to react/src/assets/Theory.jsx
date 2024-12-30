import React from 'react'

function Theory() {
  return (
    
      <>
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What is React.js? How is it different from other JavaScript frameworks and
libraries?
</h1>
<hr />
<p className='p-2'>
React.js is a popular, open-source JavaScript library used for building user interfaces, especially single-page applications. It allows developers to create reusable UI components and efficiently update the user interface by using a virtual DOM (Document Object Model) that improves performance. React is maintained by Facebook and has a strong community of developers.React.js is a JavaScript library for building user interfaces, focused on creating reusable components. Unlike full frameworks like Angular, React is lightweight and flexible, handling only the view layer. It uses a virtual DOM for efficient updates, features unidirectional data flow, and allows developers to write UI using JSX (HTML-like syntax in JavaScript). This makes React more flexible and performance-oriented compared to other frameworks that provide more built-in features and structure.
</p>
      </div>
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What are the advantages of using React.js in web development?
</h1>
<hr />
<p className='p-2'>
React.js offers several advantages for web development. Its fast performance is driven by the use of a virtual DOM, which ensures efficient updates by only re-rendering necessary components. The reusable components architecture allows developers to create modular, self-contained UI elements that can be reused throughout the application, reducing redundancy and saving time. React is also highly flexible, enabling easy integration with other libraries or frameworks for features like state management or routing. Its declarative UI makes it easier to design interactive interfaces, automatically updating the view when data changes. With a strong community and a rich ecosystem of tools, libraries, and resources, React simplifies the development process and supports building scalable, high-performance applications
</p>
      </div>

      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> Explain the core principles of React such as the virtual DOM and componentbased architecture
</h1>
<hr />
<h2 className='bold p-2'> The core principles of React are:
</h2>
<ol className='p-2'>
    <li> <strong>Component-Based Architecture: </strong> React apps are built with reusable components that manage their own state and UI, promoting modularity and reusability.</li>
    <li> <strong>Virtual DOM:</strong> React uses a lightweight virtual DOM to efficiently update the actual DOM, improving performance by only updating changed elements.</li>
    <li> <strong>Unidirectional Data Flow:</strong> Data flows in one direction, from parent to child components, making the app easier to understand and debug.</li>
    <li> <strong>JSX:</strong> React uses JSX, a syntax that allows HTML-like code to be written within JavaScript,</li>
</ol>
      </div>
      
      </>
  )
}

export default Theory