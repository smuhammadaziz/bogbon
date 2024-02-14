import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';

import './intro.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Images
import Img1 from '../../assets/images/img1.jpg';
import Img2 from '../../assets/images/img2.avif';
import Img3 from '../../assets/images/img3.jpg';

function Intro() {
  return (
    <div className='intro'>
      <div className='container'>
        <div className='intro_box1'>
          <h2>
            Lorem ipsum, dolor sit amet <span>consectetur</span> adipisicing elit. Soluta
            esse doloribus tempore recusandae porro natus <span>voluptate</span>{' '}
            asperiores ipsa praesentium aperiam.
          </h2>
        </div>

        <div className='intro_box2'>
          <Swiper
            loop={true}
            autoplay={true}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={Img1} alt='helping people image' width='650' height='380' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img2} alt='helping people image' width='650' height='380' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img3} alt='helping people image' width='650' height='380' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Intro;
