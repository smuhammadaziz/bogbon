import React from 'react';
import './home.css';

import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import About from '../../components/about/about';
import Footer from '../../components/footer/footer';

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Intro />
        <About />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
