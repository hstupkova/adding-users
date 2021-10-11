import React from 'react';
import './UserInput.css';
import { useState } from 'react';

const UserInput = ({onUpdateUsers}) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, age);
    onUpdateUsers({'name': username, 'age': age, 'id': Math.random().toString()});
    setUsername('');
    setAge('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="form-field">
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} />
      </div>
      <button className="btn" type="submit">Add User</button>
    </form>
  );
};

export default UserInput;
