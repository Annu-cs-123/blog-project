import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='Name' />
        <input required type='text' placeholder='Username' />
        <input required type='password' placeholder='Password' />
        <button>Login</button>
        <p>Error!</p>
        <span> Do have an acount </span><Link to="/login">Login</Link>
      </form>
    </div>
  )
}

export default Register
