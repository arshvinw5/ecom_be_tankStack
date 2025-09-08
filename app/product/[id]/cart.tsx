import { FlatList } from 'react-native';
import useCart from '~/store/cart_store';
import { Card } from '~/components/ui/card';
import { HStack } from '~/components/ui/hstack';
import { Stack } from 'expo-router';
import { Image } from '@/components/ui/image';
import { Heading } from '~/components/ui/heading';
import { Box } from '~/components/ui/box';
import { Text } from '~/components/ui/text';
import { VStack } from '~/components/ui/vstack';
import { Button, ButtonText } from '~/components/ui/button';

export default function Cart() {
  const item = useCart((state: any) => state.items);
  const resetCart = useCart((state: any) => state.resetItems);

  const checkout = async () => {
    resetCart();
  };
  return (
    <>
      <Stack.Screen options={{ title: 'Cart', headerTitleAlign: 'center' }} />
      <FlatList
        data={item}
        contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full p-3"
        renderItem={({ item }) => (
          <Card>
            <HStack space="md">
              <Image
                source={{
                  uri: item.product.image,
                }}
                className="mb-6 rounded-md"
                alt={`Image of ${item.product.name}`}
                resizeMode="contain"
              />
              <VStack>
                <Box>
                  <Heading size="md">{item.product.name}</Heading>
                  <Text>LKR {item.product.price}</Text>
                </Box>
              </VStack>
              <Text className="ml-auto"> {item.quantity}</Text>
            </HStack>
          </Card>
        )}
        ListFooterComponent={() => (
          <Button onPress={checkout} className="w-full justify-center gap-4 bg-black">
            <ButtonText>Checkout</ButtonText>
          </Button>
        )}
      />
    </>
  );
}
