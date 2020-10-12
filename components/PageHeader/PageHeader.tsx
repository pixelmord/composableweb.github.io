import { Box, Flex, FlexProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const PageHeader: React.FC<FlexProps> = ({
  children,
  ...rest
}: PropsWithoutRef<PropsWithChildren<FlexProps>>) => (
  <Box as="header" backgroundColor="blue.300" position="relative" {...rest}>
    <Flex
      flexDirection="column"
      justifyContent={['flex-start', 'flex-start', 'flex-start', 'space-between']}
      position={{ base: 'relative', lg: 'fixed' }}
      w={{ base: '100%', lg: '350px', xl: '450px' }}
      h={{ base: '100%', lg: '100vh' }}
      top={0}
      left={0}
      bottom={0}
      zIndex={2}
    >
      {children}
    </Flex>
    <Box
      backgroundImage={`url('${require('../../public/static/images/header/age-barros-G7eOlE96lbM-unsplash.jpg?resize&size=1000')}')`}
      backgroundSize="cover"
      position="absolute"
      w="100%"
      h="100%"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={1}
      opacity={0.2}
      display={{ base: 'block', lg: 'block' }}
    />
  </Box>
);
export default PageHeader;
