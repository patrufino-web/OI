import React, { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/formatCurrency';

const CheckoutPage: React.FC = () => {
  const { cartItems, totalAmount } = useCart();
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and payment processing
    console.log('Shipping Details:', shippingDetails);
    console.log('Total Amount:', totalAmount);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingDetails.name}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingDetails.address}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingDetails.city}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={shippingDetails.postalCode}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingDetails.country}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
        <div className="mb-4">
          {/* Placeholder for payment integration */}
          <p className="text-gray-600">Payment integration coming soon...</p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">
            Total: {formatCurrency(totalAmount)}
          </span>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;

