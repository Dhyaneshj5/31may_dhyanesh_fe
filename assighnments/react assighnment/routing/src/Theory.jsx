import React from 'react'

function Theory() {
  return (
    <>
    <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'> What is React Router? How does it handle routing in single-page applications?
</h1>
<hr />
<p className='p-2'>
React Router is a library used for handling routing in React applications, enabling navigation between different views or components in a single-page application (SPA). It allows you to map different URLs to specific React components, providing a seamless user experience without full-page reloads.
</p>
<p className="p-2">In SPAs, when a user interacts with the app by clicking links or buttons, React Router dynamically updates the URL and displays the corresponding component without refreshing the entire page. It uses URL patterns to match routes to components and provides tools like Route, Link, and BrowserRouter to manage navigation and display content based on the current URL. This enables efficient, client-side routing, where the page doesn't reload, resulting in faster navigation and a more fluid user experience. React Router also supports features like nested routes, route parameters, and programmatic navigation.</p>
      </div> 
      <hr />
      <div className='border m-2 bg-yellow-200'>
        <h1 className='m-2'>Explain the difference between BrowserRouter, Route, Link, and Switch
components in React Router.

</h1>
<hr />
<h2 className="p-2">BrowserRouter:</h2>
<p className="p-2">It is the primary component used to wrap your entire application to enable routing.BrowserRouter uses the HTML5 History API to manage the URL in the browser. It provides clean and dynamic URL handling for SPAs (without reloading the page) and enables features like pushState, replaceState, and history navigation.Typically, BrowserRouter is used at the root level of your application to provide routing context to all other components that need routing functionality.</p>

<h2 className="p-2">Route:</h2>
<p className="p-2">The Route component is used to define a path and render a component based on the URL.It takes a path prop (a URL pattern) and a component or element prop (the component to render when the URL matches the path). When the URL matches the path, the associated component is rendered. You can define multiple Route components to handle different paths in your application.</p>

<h2 className="p-2">Link:</h2>
<p className="p-2"> The Link component is used to navigate between different routes without causing a full page reload. Link renders an anchor (a) tag but with the functionality of React Router, enabling client-side navigation. When clicked, it updates the URL and triggers the corresponding route.Link is used to navigate within your application and replace traditional anchor  tags to prevent a page refresh.</p>

<h2 className="p-2">Switch:</h2>
<p className="p-2">Switch ensures that only one Route is rendered at a time, by rendering the first matched route.When multiple Route components are defined, Switch checks the URL and renders the first route whose path matches the current URL. If no routes match, it can render a fallback Route (like a "404 Not Found" page).Switch is typically used when you want to ensure that only one route is active at a time, providing exclusive rendering.</p>


      </div> 
    </>
  )
}

export default Theory