/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import { NextNavLink as NavLink } from '../NextNavLink';
export const FooterNavigation: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box {...props} as="nav">
    <NavLink href="/imprint" color="white">
      Imprint
    </NavLink>
  </Box>
);
export default FooterNavigation;
