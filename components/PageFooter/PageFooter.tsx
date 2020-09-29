/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flex, BoxProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const PageFooter: React.FC<BoxProps> = ({ children, ...rest }: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Flex justifyContent="center" alignItems="center">
    {children}
  </Flex>
);
export default PageFooter;
