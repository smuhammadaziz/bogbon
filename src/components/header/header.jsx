import React from 'react';
import { useState } from 'react';
import './header.css';

import { NavLink } from 'react-router-dom';

// images
import accessImg from '../../assets/images/access.svg';
import downArrowImg from '../../assets/images/down.svg';
import searchImg from '../../assets/images/search.svg';
import calcelImg from '../../assets/images/cancel.svg';

function Header() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='header_top'>
            <div className='header_top__box'>
              <NavLink to='/' className='header_top__logo'>
                <p>LOGO</p>
              </NavLink>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div className='header_top__box'>
              <NavLink to='/login' className='header_top__login'>
                <p>Login</p>
              </NavLink>
              <NavLink to='/signup' className='header_top__signup'>
                <p>Sign up</p>
              </NavLink>
            </div>
          </div>
          <div className='header_bottom'>
            <nav className='header_bottom__nav'>
              <ul className='header__bottom__nav__list'>
                <li className='header__bottom__nav__list__item'>
                  <NavLink to='/' className='header__bottom__nav__list__item__link'>
                    Education
                  </NavLink>
                </li>
                <li className='header__bottom__nav__list__item'>
                  <NavLink to='/' className='header__bottom__nav__list__item__link'>
                    Research
                  </NavLink>
                </li>
                <li className='header__bottom__nav__list__item'>
                  <NavLink to='/' className='header__bottom__nav__list__item__link'>
                    Community
                  </NavLink>
                </li>
                <li className='header__bottom__nav__list__item header__bottom__nav__list__item__nested'>
                  <p className='header__bottom__nav__list__item__link header__bottom__nestedlink__text'>
                    More{' '}
                    <img
                      src={downArrowImg}
                      alt='down arrow icon in bogbon website'
                      width='20'
                      height='20'
                    />
                  </p>
                  <ul className='header__bottom__nested_list'>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        About us
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Events
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Career
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div className='header_bottom__box'>
              <button type='button' className='header_bottom__access'>
                <p>Accessibility</p>
                <img src={accessImg} alt='search icon' width='22' height='22' />
              </button>
              <p className='header_bottom__changelang'>Uzbek</p>
              <button type='button' className='header_bottom__search'>
                <img src={searchImg} alt='search icon' width='30' height='30' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='search'>
        <div className='container'>
          <button className='search__box' type='button'>
            <img
              src={calcelImg}
              alt='cancel icon bogbon website'
              width='30'
              height='30'
            />
          </button>
          <input type='text' placeholder='Search...' className='search__input' />
        </div>
      </div>
    </>
  );
}

export default Header;
