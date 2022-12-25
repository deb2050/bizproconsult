import React from 'react';
import Header from './common/Header';
import CarouselBanner from './common/Carousel';
import About from './About';
import OurServices from './OurServices';
import OurTeam from './OurTeam';
import OurTestimonials from './OurTestimonials';
import Contact from './Contact';
import Footer from './common/Footer';

// images
import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.jpg';
import team5 from '../images/team5.jpg';

// CSS
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
      icon: 'fa-solid fa-coins',
      heading: 'Finanzberatung',
      serviceText: 'Unsere Dienstleistungen sind darauf ausgerichtet, Sie über alle Aspekte und Auswirkungen einer Transaktion zu informieren, Sie von administrativem Aufwand zu befreien und Ihnen zum richtigen Zeitpunkt den richtigen Rat zu geben'
  },
  {
      id: '2',
      icon: 'fa-solid fa-chess-bishop',
      heading: 'Strategie-Beratung',
      serviceText: 'Nahtlose Visualisierung von hochwertigem intellektuellem Kapital ohne überragende Zusammenarbeit und auf Ideenaustausch ausgerichtete Konvergenz.'
  },
  {
      id: '3',
      icon: 'fa-solid fa-users-viewfinder',
      heading: 'HR-Beratung',
      serviceText: 'Dynamische Innovation des ressourcenbasierten Kundendienstes für eine plattformübergreifende Integration des Kundendienstes auf dem neuesten Stand der Technik.'
  },
  {
      id: '4',
      icon: 'fa-solid fa-sitemap',
      heading: 'Organisationsstruktur',
      serviceText: 'Nahtlose Ermöglichung vollständig erforschter Wachstumsstrategien und interoperabler interner oder organischer, ressourcenorientierter Kundendienste.'
  },
  {
      id: '5',
      icon: 'fa-solid fa-chart-line',
      heading: 'Strategie',
      serviceText: 'Das strategische Management umfasst die Formulierung von Strategien und Zielen für das gesamte Unternehmen und die einzelnen Geschäftsbereiche.'
  }
];

// Our Team
const teamDetails = [
  {
    id: 1,
    image: team5,
    teamMember: 'Roland Wittphal',
    portfolio: 'Roland ist der Inhaber von Bizproconsult und hat über 15 Jahre Erfahrung in Strategie-Beratung, Organisationsstruktur und in Business Strategie.'
  },
  {
    id: 2,
    image: team2,
    teamMember: 'Jenice Koer',
    portfolio: 'Jenice Koer hat über 5 Jahre Erfahrung in der HR-Beratung.'
  },
  {
    id: 3,
    image: team3,
    teamMember: 'Christina Malchow',
    portfolio: 'Christina Malchow hat über 7 Jahre Erfahrung in der Finanzberatung.'
  },
  {
    id: 4,
    image: team4,
    teamMember: 'Tobias Strumm',
    portfolio: 'Tobias hat über 3 Jahre Erfahrung in der Organisationsstruktur.'
  },
  {
    id: 5,
    image: team1,
    teamMember: 'Sandra Heitmeier',
    portfolio: 'Sandra hat über 5 Jahre Erfahrung in der HR-Beratung und über 2 Jahre Erfahrung in der Finanzberatung.'
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
      <OurTeam teamDetails={teamDetails} />
      <OurTestimonials />
      <Contact />
      <Footer servicesData={servicesData} aboutTexts={footerAboutText} />
    </div>
  );
}

export default App;
