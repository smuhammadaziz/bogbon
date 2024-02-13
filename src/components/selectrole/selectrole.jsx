import React from 'react';
import './selectrole.css';

import BogbonImg from '../../assets/images/bogbon.svg';
import Nihol from '../../assets/images/nihol.svg';
import investImg from '../../assets/images/invest.webp';

import { NavLink } from 'react-router-dom';

function SelectRole() {
  return (
    <div className='selectrole'>
      <div className='container'>
        <img src={investImg} alt='invest image' width='200' />
        <h2>Invest for the Future</h2>
        <div className='selectrole__select'>
          <NavLink className='selectrole__register_box' to='/signup/as/investor'>
            <img src={BogbonImg} alt='investor icon' width='40' height='40' />
            <h3>
              Sign up as <strong>Bog'bon</strong>
            </h3>
          </NavLink>
          <NavLink className='selectrole__register_box' to='/signup/registration'>
            <img src={Nihol} alt='people icon' width='40' height='40' />
            <h3>
              Sign up as <strong>Nihol</strong>
            </h3>
          </NavLink>
        </div>
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
      </div>
    </div>
  );
}

export default SelectRole;
