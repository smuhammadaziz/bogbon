import React from 'react';
import './stats.css';

function Statistics() {
  return (
    <div className='stats'>
      <div className='container'>
        <div className='stats__box'>
          <div className='stats__box__card'>
            <h3>320+</h3>
            <p>Investors</p>
          </div>
          <div className='stats__box__card'>
            <h3>13000+</h3>
            <p>Users</p>
          </div>
          <div className='stats__box__card'>
            <h3>23+</h3>
            <p>Researchs</p>
          </div>
          <div className='stats__box__card'>
            <h3>8+</h3>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
