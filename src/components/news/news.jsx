import React from 'react';

import './news.css';

import news1img from '../../assets/images/news1.avif';
import news2img from '../../assets/images/news2.avif';
import news3img from '../../assets/images/news3.avif';
import news4img from '../../assets/images/news4.avif';
import rightimg from '../../assets/images/right.svg';

import { NavLink } from 'react-router-dom';

function News() {
  return (
    <div className='news'>
      <h2 className='news__heading'>Yangiliklar</h2>
      <div className='container'>
        <div className='news__card'>
          <div className='news__card__card'>
            <img src={news1img} alt='news card image' width='500' />
            <h3>Pre-University Education</h3>
            <p>
              For K-12 students, we have programs ranging from IB-accredited school
              systems to specialized schools that make sure every child gets the education
              they deserve.
            </p>
            <NavLink to='/' className='news__card__card__link'>
              <img src={rightimg} alt='right arrow icon' width='30' height='30' />
              <p>Learn about more</p>
            </NavLink>
          </div>
          <div className='news__card__card'>
            <img src={news2img} alt='news card image' width='500' />
            <h3>Pre-University Education</h3>
            <p>
              For K-12 students, we have programs ranging from IB-accredited school
              systems to specialized schools that make sure every child gets the education
              they deserve.
            </p>
            <NavLink to='/' className='news__card__card__link'>
              <img src={rightimg} alt='right arrow icon' width='30' height='30' />
              <p>Learn about more</p>
            </NavLink>
          </div>
          <div className='news__card__card'>
            <img src={news3img} alt='news card image' width='500' />
            <h3>Pre-University Education</h3>
            <p>
              For K-12 students, we have programs ranging from IB-accredited school
              systems to specialized schools that make sure every child gets the education
              they deserve.
            </p>
            <NavLink to='/' className='news__card__card__link'>
              <img src={rightimg} alt='right arrow icon' width='30' height='30' />
              <p>Learn about more</p>
            </NavLink>
          </div>
          <div className='news__card__card'>
            <img src={news4img} alt='news card image' width='500' />
            <h3>Pre-University Education</h3>
            <p>
              For K-12 students, we have programs ranging from IB-accredited school
              systems to specialized schools that make sure every child gets the education
              they deserve.
            </p>
            <NavLink to='/' className='news__card__card__link'>
              <img src={rightimg} alt='right arrow icon' width='30' height='30' />
              <p>Learn about more</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
