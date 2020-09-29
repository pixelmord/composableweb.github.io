/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, BoxProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

import { NextNavLink as NavLink } from '../NextNavLink';

export const MainNavigation: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box {...props} as="nav">
    <NavLink href="/blog">Blog</NavLink>
  </Box>
);
export default MainNavigation;
