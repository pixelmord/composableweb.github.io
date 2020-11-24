import { Flex, BoxProps } from '@chakra-ui/react';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const PageFooter: React.FC<BoxProps> = ({ children }: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Flex justifyContent="center" alignItems="center" py={5}>
    {children}
  </Flex>
);
export default PageFooter;
