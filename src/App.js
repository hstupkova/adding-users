import React from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const handleUpdateUsers = (user) => {
    setUsers((prevUsers) => {return [user, ...prevUsers]});
  }

  return (
    <div>
      <UserInput onUpdateUsers={handleUpdateUsers} />
      {
        users.length > 0 && <UserList users={users} />
      }
    </div>
  );
}

export default App;
