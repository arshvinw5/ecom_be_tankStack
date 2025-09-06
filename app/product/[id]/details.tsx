import { Stack, useLocalSearchParams } from 'expo-router';
import product from '../../../assets/products.json';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useGetProductsById } from '~/api/use_get_product_byId';
import { ActivityIndicator } from 'react-native';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, error }: any = useGetProductsById(Number(id));

  const productDetails = data;

  //we are compare numbers to numbers

  // if (!productDetails) {
  //   return <Text>Product not found</Text>;
  // }

  if (isLoading) {
    return (
      <>
        <Stack.Screen options={{ title: productDetails.name, headerTitleAlign: 'center' }} />
        <ActivityIndicator
          size="large"
          color="black"
          className="flex-1 items-center justify-center"
        />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Stack.Screen options={{ title: productDetails.name, headerTitleAlign: 'center' }} />
        <Text className="flex-1 items-center justify-center text-red-500">
          Error: {error.message}
        </Text>
      </>
    );
  }

  if (!data || data.length === 0) {
    return (
      <>
        <Stack.Screen options={{ title: productDetails.name, headerTitleAlign: 'center' }} />
        <Text className="flex-1 items-center justify-center">No products found</Text>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: productDetails.name, headerTitleAlign: 'center' }} />
      <Box className="flex-1 items-center p-3">
        <Card className="mx-auto w-full max-w-[960px] flex-1 rounded-lg p-5">
          <Image
            source={{
              uri: productDetails.image,
            }}
            className="mb-6 aspect-[4/3] h-[240px] w-full rounded-md"
            alt={`Image of ${productDetails.name}`}
            resizeMode="contain"
          />
          <Text className="mb-2 text-sm font-normal text-typography-700">
            {productDetails.price}
          </Text>
          <VStack className="mb-6">
            <Heading size="md" className="mb-4">
              {productDetails.name}
            </Heading>
            <Text size="sm">{productDetails.description}</Text>
          </VStack>
          <Box className="flex-col sm:flex-row">
            <Button className="mb-3 mr-0 px-4 py-2 sm:mb-0 sm:mr-3 sm:flex-1">
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
