import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { formatCurrency } from '@/utils/formatCurrency';
import { getProductById } from '@/utils/api';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      getProductById(id as string).then((data) => {
        setProduct(data);
      });
    }
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
          <p className="mt-2 text-lg text-gray-700">{product.description}</p>
          <p className="mt-4 text-2xl font-semibold text-secondary">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

