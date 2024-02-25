import React from 'react';
import './home.css';

import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import About from '../../components/about/about';
import Footer from '../../components/footer/footer';
import News from '../../components/news/news';
import Latest from '../../components/latest/latest';
import Statistics from '../../components/statistics/stats';

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Intro />
        <News />
        <Statistics />
        <Latest />
        {/* <About /> */}
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
