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
// Our Services
const servicesData = [
  {
      id: '1',
      heading: 'Finanzberatung',
      serviceText: 'Unsere Dienstleistungen sind darauf ausgerichtet, Sie über alle Aspekte und Auswirkungen einer Transaktion zu informieren, Sie von administrativem Aufwand zu befreien und Ihnen zum richtigen Zeitpunkt den richtigen Rat zu geben'
  },
  {
      id: '2',
      heading: 'Strategie-Beratung',
      serviceText: 'Nahtlose Visualisierung von hochwertigem intellektuellem Kapital ohne überragende Zusammenarbeit und auf Ideenaustausch ausgerichtete Konvergenz.'
  },
  {
      id: '3',
      heading: 'HR-Beratung',
      serviceText: 'Dynamische Innovation des ressourcenbasierten Kundendienstes für eine plattformübergreifende Integration des Kundendienstes auf dem neuesten Stand der Technik.'
  },
  {
      id: '4',
      heading: 'Organisationsstruktur',
      serviceText: 'Nahtlose Ermöglichung vollständig erforschter Wachstumsstrategien und interoperabler interner oder organischer, ressourcenorientierter Kundendienste.'
  },
  {
      id: '5',
      heading: 'Strategie',
      serviceText: 'Das strategische Management umfasst die Formulierung von Strategien und Zielen für das gesamte Unternehmen und die einzelnen Geschäftsbereiche.'
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBanner />
      <About />
      <OurServices servicesData={servicesData} />
      <OurTeam />
      <OurTestimonials />
      <Contact />
      <Footer servicesData={servicesData} />
    </div>
  );
}

export default App;
