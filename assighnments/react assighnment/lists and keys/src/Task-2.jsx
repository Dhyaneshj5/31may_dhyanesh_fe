import React from 'react';

const UserList = () => {
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'David', age: 35 },
    { id: 5, name: 'Eve', age: 28 },
  ];

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li className='p-1' key={user.id}>
            {user.name} (Age: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
