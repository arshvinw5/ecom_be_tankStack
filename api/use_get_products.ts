import { useQuery } from '@tanstack/react-query';

export const useGetProducts = () => {
  const APi_URL = process.env.EXPO_PUBLIC_API_URL;

  const query = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`${APi_URL}/products`);

      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
      }

      const json = await res.json();

      return json;
    },
  });

  return query;
};
