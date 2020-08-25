/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

import { NextNavLink as NavLink } from '../NextNavLink';

export const MainNavigation: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box {...props}>
    <NavLink href="/imprint">Imprint</NavLink>
  </Box>
);
export default MainNavigation;
