import { Stack, useLocalSearchParams } from 'expo-router';
// import product from '../../../assets/products.json';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useGetProductsById } from '~/api/use_get_product_byId';
// import { ActivityIndicator } from 'react-native';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import useCart from '~/store/cart_store';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, error }: any = useGetProductsById(Number(id));

  console.log('Details component state:', data);

  const addProduct = useCart((state: any) => state.addProduct);
  // const cartItems = useCart((state) => state.items);

  // console.log('Current cart items:', JSON.stringify(cartItems, null, 2));

  const addToCart = () => {
    addProduct(data);
  };

  //we are compare numbers to numbers

  // if (!data) {
  //   return <Text>Product not found</Text>;
  // }

  if (!data || data.length === 0 || isLoading) {
    return (
      <>
        {/* <Stack.Screen options={{ title: data.name, headerTitleAlign: 'center' }} />
        <ActivityIndicator
          size="large"
          color="black"
          className="flex-1 items-center justify-center"
        /> */}
        <Box className="flex-1 items-center p-3 ">
          <Card className="mx-auto w-full gap-4 rounded-lg p-5">
            <Box className="gap-2">
              <Skeleton variant="sharp" className="mb-6 h-[240px] w-full rounded-md" />
              <SkeletonText _lines={1} className="h-2 w-20" />
              <SkeletonText _lines={1} className="h-2 w-40" />
              <SkeletonText _lines={3} className="h-2 " />
            </Box>
            <Box className="w-full flex-col gap-2">
              <SkeletonText _lines={1} gap={1} className="h-6" />
              <SkeletonText _lines={1} gap={1} className="h-6" />
            </Box>
          </Card>
        </Box>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Stack.Screen options={{ title: data.name, headerTitleAlign: 'center' }} />
        <Text className="flex-1 items-center justify-center text-red-500">
          Error: {error.message}
        </Text>
      </>
    );
  }

  // if (!data || data.length === 0) {
  //   return (
  //     <>
  //       <Stack.Screen options={{ title: data.name, headerTitleAlign: 'center' }} />
  //       <Text className="flex-1 items-center justify-center">No products found</Text>
  //     </>
  //   );
  // }

  return (
    <>
      <Stack.Screen options={{ title: data.name, headerTitleAlign: 'center' }} />
      <Box className="flex-1 items-center p-3">
        <Card className="mx-auto w-full max-w-[960px] flex-1 rounded-lg p-5">
          <Image
            source={{
              uri: data.image,
            }}
            className="mb-6 aspect-[4/3] h-[240px] w-full rounded-md"
            alt={`Image of ${data.name}`}
            resizeMode="contain"
          />
          <Text className="mb-2 text-sm font-normal text-typography-700">{data.price}</Text>
          <VStack className="mb-6">
            <Heading size="md" className="mb-4">
              {data.name}
            </Heading>
            <Text size="sm">{data.description}</Text>
          </VStack>
          <Box className="flex-col sm:flex-row">
            <Button onPress={addToCart} className="mb-3 mr-0 px-4 py-2 sm:mb-0 sm:mr-3 sm:flex-1">
              <ButtonText size="sm">Add to cart</ButtonText>
            </Button>
            <Button variant="outline" className="border-outline-300 px-4 py-2 sm:flex-1">
              <ButtonText size="sm" className="text-typography-600">
                Wishlist
              </ButtonText>
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
}
