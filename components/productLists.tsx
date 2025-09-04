import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

type Props = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductLists({ id, name, description, image, price }: Props) {
  return (
    <Link href={{ pathname: '/product/[id]/details', params: { id: id.toString() } }} asChild>
      <Pressable className="flex-1">
        <Card className="flex-1 rounded-lg p-5">
          <Image
            source={{
              uri: image,
            }}
            className="mb-6 aspect-[4/3] h-[240px] w-full rounded-md"
            alt={`Image of ${name}`}
            resizeMode="contain"
          />
          <Text className="mb-2 text-sm font-normal text-typography-700">{name}</Text>
          <Heading size="md" className="mb-4">
            LKR {price}
          </Heading>
        </Card>
      </Pressable>
    </Link>
  );
}
