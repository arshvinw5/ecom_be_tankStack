import { useQuery } from '@tanstack/react-query';

export const useGetProductsById = (id: number) => {
  const APi_URL = process.env.EXPO_PUBLIC_API_URL;

  const query = useQuery({
    enabled: !!id,
    //boolean to check if id is valid
    queryKey: ['products', { id }],
    queryFn: async () => {
      const res = await fetch(`${APi_URL}/products/${id}`);

      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
      }

      const json = await res.json();
      console.log('Fetched product:', json);

      return json;
    },
  });

  return query;
};
