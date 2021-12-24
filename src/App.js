import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  const [enteredUser, setEnteredUser] = useState([]);

  const addingUserHandler = (uName, uAge) => {
    setEnteredUser((previousUsers) => {
      return [
        ...previousUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUsers onAddUser={addingUserHandler} />
      <UserList users={enteredUser} />
    </React.Fragment>
  );
}

export default App;
