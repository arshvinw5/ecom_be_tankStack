const APi_URL = process.env.EXPO_PUBLIC_API_URL;

export async function fetchProducts() {
  console.log('API URL:', APi_URL);
  const res = await fetch(`${APi_URL}/products`);
  const data = await res.json();
  console.log('Fetching data from API:', data);
  return data;
}
