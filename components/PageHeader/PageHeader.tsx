/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flex, FlexProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const PageHeader: React.FC<FlexProps> = ({
  children,
  ...rest
}: PropsWithoutRef<PropsWithChildren<FlexProps>>) => (
  <Flex as="header" flexDirection="column" backgroundColor="rgba(0, 134, 151, 0.55)" {...rest}>
    {children}
  </Flex>
);
export default PageHeader;
