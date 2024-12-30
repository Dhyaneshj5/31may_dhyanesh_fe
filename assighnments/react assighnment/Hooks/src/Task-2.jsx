import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);  // To store fetched data
  const [isLoading, setIsLoading] = useState(true);  // To track loading state
  const [error, setError] = useState(null);  // To store errors if any

  useEffect(() => {
    // Fetching data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);  // Store the fetched data in the state
        setIsLoading(false);  // Set loading to false
      })
      .catch((error) => {
        setError(error.message);  // Store error message if fetch fails
        setIsLoading(false);  // Set loading to false
      });
  }, []);  // Empty dependency array ensures this effect runs only once, on mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default DataFetcher;
