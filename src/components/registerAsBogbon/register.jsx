import React from 'react';
import './register.css';

import { NavLink } from 'react-router-dom';

function RegisterAsBogbon() {
  return (
    <div className='registerbogbon'>
      <div className='container'>
        <h2>Sign up</h2>
        <form action='' className='registerbogbon__form'>
          <label htmlFor='' className='registrationbogbon__form__label'>
            <input type='text' placeholder='Name...' />
            <input type='text' placeholder='Surname...' />
          </label>
          <input type='text' placeholder='Phone number...' />
          <input type='text' placeholder='Email...' />
          <input type='password' placeholder='Password...' />

          <button type='submit' className='registerbogbon__btn'>
            Sign up
          </button>
          <p className='selectrole__text selectrole__textaa'>
            Already have an account?{' '}
            <NavLink to='/login' className='selectrole__text__link'>
              Log in
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

export default RegisterAsBogbon;
