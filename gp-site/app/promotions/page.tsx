// gp-site/app/promotions/page.tsx

import React from 'react';

const promotionsData = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Get up to 50% off on selected items during our Summer Sale!',
    imageUrl: '/images/summer-sale.jpg',
  },
  {
    id: 2,
    title: 'Buy One Get One Free',
    description: 'Exclusive offer: Buy one, get one free on all kitchen utensils.',
    imageUrl: '/images/bogo-offer.jpg',
  },
  {
    id: 3,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on orders over $100.',
    imageUrl: '/images/free-shipping.jpg',
  },
];

const PromotionsPage: React.FC = () => {
  return (
    <div className="bg-off-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Current Promotions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotionsData.map((promotion) => (
            <div key={promotion.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={promotion.imageUrl}
                alt={promotion.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-secondary mb-2">{promotion.title}</h2>
                <p className="text-gray-700">{promotion.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;

