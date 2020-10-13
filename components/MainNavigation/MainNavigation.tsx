import { Box, BoxProps, Divider, IconButton, useDisclosure } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/router';

import { NextNavLink as NavLink } from '../NextNavLink';

export const MainNavigation: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => {
  const { isOpen, onToggle } = useDisclosure();
  const { asPath } = useRouter();
  return (
    <Box {...props} as="nav" position="relative">
      <IconButton
        icon={<FiMenu style={{ display: 'inline-block' }} />}
        aria-label="Show Navigation"
        position="absolute"
        bottom="calc(100% + 10px)"
        right="0"
        onClick={onToggle}
        display={{ lg: 'none' }}
        variant="ghost"
      />
      <Box display={{ base: `${isOpen ? 'block' : 'none'}`, lg: 'block' }} pt={5} pb={8}>
        <NavLink href="/blog" color={asPath.startsWith('/blog') ? 'pink.800' : 'gray.700'}>
          Blog
        </NavLink>
        <Divider my={2} borderColor="teal.600" />
        <NavLink href="/code-recipes" color={asPath.startsWith('/code-recipes') ? 'pink.800' : 'gray.700'}>
          Code Recipes
        </NavLink>
      </Box>
    </Box>
  );
};
export default MainNavigation;
