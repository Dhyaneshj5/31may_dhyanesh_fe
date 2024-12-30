import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

const App1 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const apiBase = 'http://localhost:3000/users';

  // Fetch all users (GET)
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(apiBase);
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  // Add a new user (POST)
  const addUser = async () => {
    try {
      setLoading(true);
      const response = await axios.post(apiBase, newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
    } catch (err) {
      setError('Failed to add user.');
    } finally {
      setLoading(false);
    }
  };

  // Update a user (PUT)
  const updateUser = async (id, updatedUser) => {
    try {
      setLoading(true);
      const response = await axios.put(`${apiBase}/${id}`, updatedUser);
      setUsers(users.map(user => (user.id === id ? response.data : user)));
    } catch (err) {
      setError('Failed to update user.');
    } finally {
      setLoading(false);
    }
  };

  // Partially update a user (PATCH)
  const patchUser = async (id, updatedFields) => {
    try {
      setLoading(true);
      const response = await axios.patch(`${apiBase}/${id}`, updatedFields);
      setUsers(users.map(user => (user.id === id ? response.data : user)));
    } catch (err) {
      setError('Failed to patch user.');
    } finally {
      setLoading(false);
    }
  };

  // Delete a user (DELETE)
  const deleteUser = async id => {
    try {
      setLoading(true);
      await axios.delete(`${apiBase}/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError('Failed to delete user.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Manage Users</h1>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={e => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => updateUser(user.id, { name: 'Updated Name', email: user.email })}>
                  Update
                </button>
                <button onClick={() => patchUser(user.id, { name: 'Patched Name' })}>
                  Patch
                </button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App1;
