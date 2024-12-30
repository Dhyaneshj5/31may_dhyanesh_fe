import React from "react";


function Theory(){

    return(
        <>    
            <div className= ' bg-yellow-200'>
            <h1 className='m-2 font-bold'>What do you mean by RESTful web services?</h1>
            <hr />
            <p className="p-2 m-2">RESTful web services are a set of web services that follow the principles of REST (Representational State Transfer), an architectural style for designing networked applications. These services use standard HTTP methods like GET, POST, PUT, DELETE, and PATCH to perform operations on resources, which are typically represented as URLs. RESTful web services are stateless, meaning each request from a client to a server must contain all the information needed to understand and process the request. They also leverage common data formats like JSON or XML for communication, making them lightweight and easy to scale.</p>
        </div>
        <hr />
        <div className= ' bg-yellow-200'>
            <h1 className='m-2 font-bold'>What is Json-Server? How we use in React ? </h1>
            <hr />
            <p className="p-2 m-2">JSON-Server is a simple and fast tool that allows you to create a full-fledged REST API with mock data in just a few minutes. It's typically used for development and testing purposes, simulating a backend server with a JSON file as the database. To use it with React, you install JSON-Server locally, create a db.json file with your mock data, and run the server. You can then make HTTP requests (like GET, POST, PUT, DELETE) from your React app to interact with the mock API, mimicking how your app would work with a real backend. This is especially useful when you don't have a live backend during development or for testing purposes.</p>
        </div>
        <hr />
        <div className= ' bg-yellow-200'>
            <h1 className='m-2 font-bold'>How do you fetch data from a Json-server API in React? Explain the role of axios() in making API requests </h1>
            <hr />
            <p className="p-2 m-2">o fetch data from a JSON-server API in React, you typically use a library like Axios or the native fetch() method. Axios is a popular promise-based HTTP client that simplifies making API requests. It provides methods like axios.get(), axios.post(), axios.put(), and axios.delete() to perform CRUD operations. In a React component, you can use axios() to make an API call, often within a useEffect hook for fetching data when the component mounts. Axios handles request/response transformations and errors efficiently, making it easier to work with APIs. </p>
        </div>
        <hr />
       
    
        </>

    )


}
export default Theory