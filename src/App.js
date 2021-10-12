import React from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';
import { useState } from 'react';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [displayError, setDisplayError] = useState('none');
  const [formDisabled, setFormDisabled] = useState(false);

  const handleUpdateUsers = (user) => {
    setUsers((prevUsers) => {return [user, ...prevUsers]});
  }

  const handleEmptyForm = () => {
    setErrorMessage('Please enter a valid name and age (non-empty values).');
    setDisplayError('block');
    setFormDisabled(true);
  }

  const handleInvalidAge = () => {
    setErrorMessage('Please enter a valid age (> 0).');
    setDisplayError('block');
    setFormDisabled(true);
  }

  const handleCloseError = () => {
    setDisplayError('none');
    setFormDisabled(false);
  }

  return (
    <div>
      <UserInput onUpdateUsers={handleUpdateUsers} onEmptyForm={handleEmptyForm} onInvalidAge={handleInvalidAge} disabled={formDisabled} />
      {
        users.length > 0 && <UserList users={users} />
      }
      <ErrorModal text={errorMessage} displayError={displayError} onCloseError={handleCloseError} />
    </div>
  );
}

export default App;
