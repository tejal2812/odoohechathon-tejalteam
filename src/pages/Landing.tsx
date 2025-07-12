import React from 'react';
import Hero from '../components/Landing/Hero';
import FeaturedItems from '../components/Landing/FeaturedItems';
import Categories from '../components/Landing/Categories';

const Landing: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedItems />
      <Categories />
    </div>
  );
};

export default Landing;