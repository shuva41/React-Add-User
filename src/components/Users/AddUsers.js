import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './Addusers.module.css';

const AddUsers = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 0) {
      return;
    }
    console.log(userName);
    console.log(userAge);
    setUserName('');
    setUserAge('');
  };

  const addUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const addUserAgeHandler = (event) => {
    setUserAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={addUserNameHandler}
          value={userName}
        />
        <label htmlFor="username">Age(years)</label>
        <input
          id="username"
          type="number"
          onChange={addUserAgeHandler}
          value={userAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUsers;
