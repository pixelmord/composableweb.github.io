/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, Flex, BoxProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const PageHeader: React.FC<BoxProps> = ({ children, ...rest }: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box
    as="header"
    css={{
      background: 'rgba(0, 134, 151, 0.55)',
    }}
    {...rest}
  >
    <Box py={[3, 3, 4]}>
      <Flex css={{ justifyContent: 'space-between', alignItems: 'center' }}>{children}</Flex>
    </Box>
  </Box>
);
export default PageHeader;
