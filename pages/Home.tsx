import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import BigCTA from '../components/BigCTA';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Categories />
      <Testimonials />
      <Team />
      <BigCTA />
      <Newsletter />
    </>
  );
};

export default Home;