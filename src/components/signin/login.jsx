import React from 'react';
import './login.css';

import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className='registerbogbon login'>
      <div className='container'>
        <form action='' className='registerbogbon__form'>
          <h2>Sign in</h2>
          <input type='text' placeholder='Phone Number...' required pattern='\S+.*' />
          <input type='password' placeholder='Password...' required pattern='\S+.*' />

          <button type='submit' className='registerbogbon__btn'>
            Log in
          </button>
          <p className='selectrole__text selectrole__textaa'>
            Don't have an account?{' '}
            <NavLink to='/signup' className='selectrole__text__link'>
              Create one
            </NavLink>
          </p>
          <p className='selectrole__text'>
            <NavLink to='/' className='selectrole__text__link'>
              Go to home page
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
