import { Stack } from 'expo-router';

import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useMemo } from 'react';

import ProductLists from '~/components/productLists';
import { useBreakpointValue } from '@gluestack-ui/utils/hooks';
import { useGetProducts } from '~/api/use_get_products';
import SkeletonUI from '~/components/skeleton';

export default function Home() {
  const { data, isLoading, error }: any = useGetProducts();

  // console.log('Home component state:', {
  //   isLoading,
  //   hasError: !!error,
  //   dataLength: data?.length || 0,
  // }); // Debug log

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
        data={data || []} // Add fallback to empty array
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
    [flexDir, data]
  );
  const loadingFlatList = useMemo(() => {
    const skeletonData = Array.from({ length: 6 }).map((_, i) => ({
      id: `skeleton-${i}`,
    }));

    return (
      <FlatList
        key={flexDir.toString()}
        data={skeletonData}
        numColumns={flexDir}
        contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
        columnWrapperClassName="gap-2"
        renderItem={() => <SkeletonUI />}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }, [flexDir]);

  if (isLoading) {
    return (
      <>
        <Stack.Screen options={{ title: 'Home', headerTitleAlign: 'center' }} />
        {loadingFlatList}
      </>
    );
  }

  if (error) {
    return (
      <>
        <Stack.Screen options={{ title: 'Home', headerTitleAlign: 'center' }} />
        <Text className="flex-1 items-center justify-center text-red-500">
          Error: {error.message}
        </Text>
      </>
    );
  }

  if (!data || data.length === 0) {
    return (
      <>
        <Stack.Screen options={{ title: 'Home', headerTitleAlign: 'center' }} />
        <Text className="flex-1 items-center justify-center">No products found</Text>
      </>
    );
  }
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerTitleAlign: 'center' }} />
      {memoizedFlatList}
    </>
  );
}
