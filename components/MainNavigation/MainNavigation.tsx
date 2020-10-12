import { Box, BoxProps, IconButton, useDisclosure } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import { FiMenu } from 'react-icons/fi';
import { NextNavLink as NavLink } from '../NextNavLink';

export const MainNavigation: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props} as="nav" position="relative">
      <IconButton
        icon={<FiMenu />}
        aria-label="Show Navigation"
        position="absolute"
        bottom="calc(100% + 10px)"
        right="0"
        onClick={onToggle}
        display={{ lg: 'none' }}
        variant="ghost"
      />
      <Box display={{ base: `${isOpen ? 'block' : 'none'}`, lg: 'block' }} py={5}>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/code-recipes">Code Recipes</NavLink>
      </Box>
    </Box>
  );
};
export default MainNavigation;
