import { API_ENDPOINTS } from '@/constants';
import { ApiProduct, Product } from '@/interfaces';
import { useEffect, useState } from 'react';

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(API_ENDPOINTS.PRODUCTS);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const apiData: ApiProduct[] = await response.json();
        
        const mappedProducts: Product[] = apiData.map((item) => ({
          id: item.id,
          productName: item.title,
          description: item.description,
          price: item.price,
        }));
        
        setProducts(mappedProducts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}