import { Link, Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';
import { Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Badge, BadgeText } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';
import useCart from '~/store/cart_store';

export default function TabLayout() {
  const item = useCart((state: any) => state.items.length);

  console.log('Current cart items in layout:', JSON.stringify(item, null, 2));
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/product/[id]/cart" asChild>
              <Pressable>
                {item && (
                  <Badge
                    className="absolute -left-3 -top-3.5 z-10 -mb-3.5 -mr-3.5 h-[22px] w-[22px] self-end rounded-full bg-red-600"
                    variant="solid">
                    <BadgeText className="text-white">{item}</BadgeText>
                  </Badge>
                )}

                <Text className="mr-3">
                  <AntDesign name="shoppingcart" size={24} color="black" />
                </Text>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
