import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Promotions from '../components/home/Promotions';

const HomePage: React.FC = () => {
  return (
    <div className="bg-off-white">
      <Hero />
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Featured Products</h2>
        <FeaturedProducts />
      </section>
      <section className="py-8 bg-secondary">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Current Promotions</h2>
        <Promotions />
      </section>
    </div>
  );
};

export default HomePage;

