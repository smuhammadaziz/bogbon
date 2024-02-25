import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './latest.css';

import { Pagination, Navigation } from 'swiper/modules';

import news1img from '../../assets/images/news1.avif';
import news2img from '../../assets/images/news2.avif';
import news3img from '../../assets/images/news3.avif';
import news4img from '../../assets/images/news4.avif';
import rightimg from '../../assets/images/right.svg';

import { NavLink } from 'react-router-dom';

function Latest() {
  return (
    <div className='latest'>
      <div className='container'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='latest__first'>
              <h4>Latest News</h4>
              <p className='latest__first__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est
                dignissimos error rem ea! Excepturi.
              </p>
              <NavLink to='/' className='news__card__card__link'>
                <img src={rightimg} alt='right arrow icon' width='30' height='30' />
                <p>Browse all news</p>
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='latest__slide'>
              <img src={news1img} alt='news latest img1' width='400' />
              <h3>
                QF’s Academic Bridge Program hosts regional forum to support educators in
                guiding students
              </h3>
              <p>
                IC3 forum allows education counselors to share insights that can help
                improve students’ future prospects
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='latest__slide'>
              <img src={news2img} alt='news latest img1' width='400' />
              <h3>
                QF’s Academic Bridge Program hosts regional forum to support educators in
                guiding students
              </h3>
              <p>
                Interested in our monthly curation of stories and events? Sign up for our
                newsletter.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='latest__slide'>
              <img src={news3img} alt='news latest img1' width='400' />
              <h3>
                Pioneer QF doctor the Arab world needs Arab scientists – and this is where
                they can make a difference
              </h3>
              <p>
                Professor Ziyad M. Hijazi, Chief Medical Officer and Chair of the
                Department of Cardiovascular Diseases at Sidra Medicine, speaks about a
                career of “touching hearts”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='latest__slide'>
              <img src={news4img} alt='news latest img1' width='400' />
              <h3>
                QF’s Academic Bridge Program hosts regional forum to support educators in
                guiding students
              </h3>
              <p>
                IC3 forum allows education counselors to share insights that can help
                improve students’ future prospects
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='latest__slide'>
              <img src={news1img} alt='news latest img1' width='400' />
              <h3>
                QF’s Academic Bridge Program hosts regional forum to support educators in
                guiding students
              </h3>
              <p>
                IC3 forum allows education counselors to share insights that can help
                improve students’ future prospects
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Latest;
