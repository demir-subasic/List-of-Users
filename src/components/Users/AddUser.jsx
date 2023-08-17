import React from 'react'
import Card from '../UI/Card';
import './adduser.modules.css'
import Button from '../UI/Button';

const AddUser = (props) => {
   
    const addUserHandler = (e) => {
      e.preventDefault();
    }

  return (
      <div className='input'>
        <Card >
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id='username' type='text'/>
        <label htmlFor="age">Age (Years)</label>
        <input id='age' type='number'/>
        <Button type='submit'>Add User</Button>
      </form>
      </Card>
      </div>
    
  )
}

export default AddUser
