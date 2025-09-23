import { Portal } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react/button';
import { Menu } from '@chakra-ui/react/menu';
import { data } from 'framer-motion/client';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="outline" size="sm">
              Order by: Relevance
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="relevance">Relevance</Menu.Item>
                <Menu.Item value="new-date">Date added</Menu.Item>
                <Menu.Item value="name">Name</Menu.Item>
                <Menu.Item value="release-date">Release date</Menu.Item>
                <Menu.Item value="popularity">Popularity</Menu.Item>
                <Menu.Item value="average-rating">Average rating</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
  )
};

export default SortSelector;