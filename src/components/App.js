import React from 'react';
import Header from './common/Header';
import CarouselBanner from './common/Carousel';
import About from './About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBanner />
      <About />
    </div>
  );
}

export default App;
