import React from 'react';
import Header from './common/Header';
import CarouselBanner from './common/Carousel';
import About from './About';
import OurServices from './OurServices';
import OurTeam from './OurTeam';
import OurTestimonials from './OurTestimonials';
import Contact from './Contact';
import Footer from './common/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBanner />
      <About />
      <OurServices />
      <OurTeam />
      <OurTestimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
