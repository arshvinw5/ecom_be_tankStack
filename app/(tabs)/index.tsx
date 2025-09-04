import { Stack } from 'expo-router';

import { FlatList } from 'react-native';
import { useMemo } from 'react';

import products from '../../assets/products.json';
import ProductLists from '~/components/productLists';
import { useBreakpointValue } from '@gluestack-ui/utils/hooks';

export default function Home() {
  // const { width } = useWindowDimensions();
  // const numberOfColumns = width > 700 ? 3 : 2;

  const flexDir = useBreakpointValue({
    default: 2,
    md: 3,
    xl: 4,
    sm: 2,
  }) as number;

  const memoizedFlatList = useMemo(
    () => (
      <FlatList
        key={flexDir.toString()}
        data={products}
        numColumns={flexDir}
        contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
        //not more than max-w which has been provided
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
    ),
    [flexDir]
  );

  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerTitleAlign: 'center' }} />
      {memoizedFlatList}
    </>
  );
}
