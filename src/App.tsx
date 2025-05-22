import  { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import CreativeCampaigns from './components/CreativeCampaigns';
import OurWork from './components/OurWork';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OurTeam />
        <CreativeCampaigns />
        <OurWork />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;