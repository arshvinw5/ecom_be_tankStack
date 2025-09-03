import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { View } from 'react-native';

type Props = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductLists({ id, name, description, image, price }: Props) {
  return (
    <Card className="max-w-[340px] flex-1 rounded-lg p-5">
      <Image
        source={{
          uri: image,
        }}
        className="mb-6 aspect-[4/3] h-[240px] w-full rounded-md"
        alt={`Image of ${name}`}
        resizeMode="contain"
      />
      <Text className="mb-2 text-sm font-normal text-typography-700">{name}</Text>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          LKR {price}
        </Heading>
        <Text size="sm">{description}</Text>
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
  );
}
