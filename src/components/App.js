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
// About
const aboutTexts = [
  {
    id: '1',
    text: 'Unsere Leidenschaft ist es, unsere Kunden bestmöglich zu unterstützen und dabei ständig zu wachsen, zu lernen und zu innovieren. Mit unserer branchenübergreifenden Kompetenz bieten wir unseren Kunden eine zuverlässigere Lieferkette und Vertrauen in die Langlebigkeit ihrer Programme.'
  },
  {
    id: '2',
    text: 'Wir bringen Win-Win-Überlebensstrategien an den Tisch, um eine proaktive Vorherrschaft zu gewährleisten. Am Ende des Tages ist eine neue Normalität, die sich aus der Generation X entwickelt hat, auf dem Weg zu einer rationalisierten Cloud-Lösung. Nutzergenerierte Inhalte in Echtzeit werden mehrere Berührungspunkte für das Offshoring haben.'
  }
];

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
];

const footerAboutText = aboutTexts[0];

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBanner />
      <About aboutTexts={aboutTexts} />
      <OurServices servicesData={servicesData} />
      <OurTeam />
      <OurTestimonials />
      <Contact />
      <Footer servicesData={servicesData} aboutTexts={footerAboutText} />
    </div>
  );
}

export default App;
