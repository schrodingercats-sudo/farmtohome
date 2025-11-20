import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import BigCTA from './components/BigCTA';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-forest-900 min-h-screen selection:bg-fresh-500 selection:text-forest-900">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Categories />
        <Testimonials />
        <Team />
        <BigCTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;