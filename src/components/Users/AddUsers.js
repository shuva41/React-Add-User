import React, { useState,Fragment } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './Addusers.module.css';

const AddUsers = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [errorState, setErrorState] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setErrorState({
        title: 'Invalid input',
        message: 'Please enter a valid Name and Age (non-empty values).',
      });
      return;
    }
    if (+userAge < 1) {
      setErrorState({
        title: 'Inavalid Age',
        message: 'Please enter a valid Age(> 1)',
      });
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName('');
    setUserAge('');
  };

  const addUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const addUserAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const cancelModalHandler = () => {
    setErrorState(null);
  };
  return (
    <Fragment>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onConfirm={cancelModalHandler}
        />
      )}
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
    </Fragment>
  );
};
export default AddUsers;
