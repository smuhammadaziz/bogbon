import React from 'react';
import './home.css';

import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Intro />
      </section>
    </div>
  );
}

export default Home;
