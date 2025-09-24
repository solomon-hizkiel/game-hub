import { Menu, Portal, Button } from '@chakra-ui/react';
import React from 'react';
import usePlatforms from '../hooks/usePlatform';
import type { Platform } from '@/hooks/useGames';
import { BsChevronDown } from 'react-icons/bs';

interface Props{
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector= ({onSelectPlatform,selectedPlatform}: Props) => {

  const {data,error}= usePlatforms ();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform ? selectedPlatform.name : 'Platforms'}<BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform: Platform) => (
              <Menu.Item onClick={() => onSelectPlatform(platform)} key={platform.id} value={platform.id.toString()}>{platform.name}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector;

