import React, { useState, useEffect } from 'react';
import { ProductCard } from '@/components/products/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/types/Product';

const ProductsPage: React.FC = () => {
  const { products, fetchProducts } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (categoryFilter === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === categoryFilter));
    }
  }, [products, categoryFilter]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Filter by Category
        </label>
        <select
          id="category"
          name="category"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="Cookware">Cookware</option>
          <option value="Cutlery">Cutlery</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

