import React from 'react';

const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.header}>User Card</h2>
      <p style={styles.text}><strong>Name:</strong> {name}</p>
      <p style={styles.text}><strong>Age:</strong> {age}</p>
      <p style={styles.text}><strong>Location:</strong> {location}</p>
    </div>
  );
};


const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '250px',
    margin: '20px auto',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  text: {
    fontSize: '16px',
    color: '#555',
  },
};

export default UserCard;
