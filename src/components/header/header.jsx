import React from 'react';
import { useState } from 'react';
import './header.css';

import { NavLink } from 'react-router-dom';

// images
import accessImg from '../../assets/images/access.svg';
import downArrowImg from '../../assets/images/down.svg';
import searchImg from '../../assets/images/search.svg';
import calcelImg from '../../assets/images/cancel.svg';

import logoImg from '../../assets/images/logo.svg';

// Hamburger menu
import { Turn as Hamburger } from 'hamburger-react';

function Header() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='header_top'>
            <div className='header_top__box header_top__box1'>
              <NavLink to='/' className='header_top__logo'>
                <img src={logoImg} alt='bogbon site logo' />
              </NavLink>

              <p>
                Dunyoda ilmdan boshqa najot yo'q va bo'lmagay <span>(Imom Buxoriy)</span>
              </p>
            </div>

            <div className='header_top__box'>
              <NavLink to='/login' className='header_top__login'>
                <p>Kirish</p>
              </NavLink>
              <NavLink to='/signup' className='header_top__signup'>
                <p>Ro'yhatdan o'tish</p>
              </NavLink>
            </div>
          </div>
          <div className='header_bottom'>
            <nav className='header_bottom__nav'>
              <ul className='header__bottom__nav__list'>
                <li className='header__bottom__nav__list__item header__bottom__nav__list__item__nested'>
                  <p className='header__bottom__nav__list__item__link header__bottom__nestedlink__text'>
                    Biz haqimizda{' '}
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
                        Biz haqimizda
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Maqsadimiz
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Bog'bon.edu.uz qanday ishlaydi
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className='header__bottom__nav__list__item header__bottom__nav__list__item__nested'>
                  <p className='header__bottom__nav__list__item__link header__bottom__nestedlink__text'>
                    Loyihalar{' '}
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
                        Umumiy loyihalar
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        To'g'ridan-to'g'ri moliyalashtiriladigan loyihalar
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className='header__bottom__nav__list__item header__bottom__nav__list__item__nested'>
                  <p className='header__bottom__nav__list__item__link header__bottom__nestedlink__text'>
                    Jamoa{' '}
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
                        Bizning jamoa
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Maslahat kengashi
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Ekspertlar guruhi
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Volantyorlar
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Vakansiyalar
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className='header__bottom__nav__list__item header__bottom__nav__list__item__nested'>
                  <p className='header__bottom__nav__list__item__link header__bottom__nestedlink__text'>
                    Ma'lumotlar{' '}
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
                        Homiylar uchun
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Hamkorlar uchun
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Nomzod yoshlar uchun
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Volantiyorlar uchun
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Ariza berish qoidalari va talablari
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Ko'p beriladigan savollar
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Ochiq hisobot statistika
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className='header__bottom__nav__list__item header__bottom__nav__list__item__nested'>
                  <p className='header__bottom__nav__list__item__link header__bottom__nestedlink__text'>
                    Yangiliklar{' '}
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
                        Barcha yangiliklar
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Fotogalareya
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Videogalareya
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className='header__bottom__nav__list__item header__bottom__nav__list__item__nested'>
                  <p className='header__bottom__nav__list__item__link header__bottom__nestedlink__text'>
                    Tizimga kirish{' '}
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
                        Ro'yhat o'tish
                      </NavLink>
                    </li>
                    <li className='header__bottom__nested_list__item'>
                      <NavLink to='/' className='header__bottom__nested_list__item__link'>
                        Mening profilim
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className='header__bottom__nav__list__item'>
                  <NavLink to='/' className='header__bottom__nav__list__item__link'>
                    Bog'lanish
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className='header_bottom__box'>
              <p className='header_bottom__changelang'>English</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
