import React, {useState} from 'react'
import Card from '../UI/Card';
import './adduser.modules.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('')
   
    const addUserHandler = (e) => {
      e.preventDefault();

      if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid name and age'
        });
        return;
      }
      if (+enteredAge < 1) {
        setError({
          title: 'Invalid age',
          message: 'Please enter a age'
        });
        return;
      }
      props.onAddUser(enteredUsername, enteredAge);
      setEnteredUsername('');
      setEnteredAge('');
    }


    const usernameChangeHandler = (e) => {
         setEnteredUsername(e.target.value)
    }

    const ageChangeHandler = (e) => {
      setEnteredAge(e.target.value)
 }


    const errorHandler = () => {
      setError(null)
    }

  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <div className='input'>
        <Card >
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input value={enteredUsername} id='username' type='text' onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input value={enteredAge} id='age' type='number' onChange={ageChangeHandler}/>
        <Button type='submit'>Add User</Button>
      </form>
      
      </Card>
      </div>
      </>
    
  )
}

export default AddUser
