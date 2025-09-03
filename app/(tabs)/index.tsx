import { Stack } from 'expo-router';

import { FlatList, View } from 'react-native';

import products from '../../assets/products.json';
import ProductLists from '~/components/productLists';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerTitleAlign: 'center' }} />
      <FlatList
        data={products}
        numColumns={2}
        contentContainerClassName="gap-2"
        columnWrapperClassName="gap-2"
        renderItem={({ item }) => (
          <ProductLists
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
}
