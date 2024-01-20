import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='password' />
        <button>Login</button>
        <p>Error!</p>
        <span> Don't have an acount? </span><Link to="/register">Register</Link>
      </form>
    </div>
  )
}

export default Login
