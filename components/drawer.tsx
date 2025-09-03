import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@/components/ui/drawer';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { LogOut } from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from './ui/avatar';
import { Divider } from './ui/divider';
import { Pressable } from 'react-native';
import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function DrawerExample({ isOpen, onClose }: Props) {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={() => onClose()}>
        <DrawerBackdrop />
        <DrawerContent className="w-[270px] md:w-[300px]">
          <DrawerHeader className="flex-col justify-center gap-2">
            <Avatar size="2xl">
              <AvatarFallbackText>User Image</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}
              />
            </Avatar>
            <VStack className="items-center justify-center">
              <Text size="lg">User Name</Text>
              <Text size="sm" className="text-typography-600">
                abc@gmail.com
              </Text>
            </VStack>
          </DrawerHeader>
          <Divider className="my-4" />
          <DrawerBody contentContainerClassName="gap-2">
            <Pressable className="flex-row items-center gap-3 rounded-md p-2 hover:bg-background-50">
              <Text>My Profile</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-3 rounded-md p-2 hover:bg-background-50">
              <Text>Saved Address</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-3 rounded-md p-2 hover:bg-background-50">
              <Text>Orders</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-3 rounded-md p-2 hover:bg-background-50">
              <Text>Saved Cards</Text>
            </Pressable>
          </DrawerBody>
          <DrawerFooter>
            <Button className="w-full gap-2" variant="outline" action="secondary">
              <ButtonText>Logout</ButtonText>
              <ButtonIcon as={LogOut} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
