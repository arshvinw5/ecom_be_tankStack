import { useQuery } from '@tanstack/react-query';

export const useGetProductsById = (id: number) => {
  const APi_URL = process.env.EXPO_PUBLIC_API_URL;
  console.log('API URL:', APi_URL); // Debug log
  console.log('Product ID:', id); // Debug log

  const query = useQuery({
    enabled: !!id,
    queryKey: ['products', { id }],
    queryFn: async () => {
      const url = `${APi_URL}/products/${id}`;
      console.log('Making request to:', url);

      try {
        const res = await fetch(url);
        console.log('Response status:', res.status);
        console.log('Response ok:', res.ok);

        if (!res.ok) {
          console.log('Response not ok:', res.status, res.statusText);
          throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
        }

        const json = await res.json();
        console.log('Fetched product data:', json);
        return json;
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }
    },
  });

  return query;
};
