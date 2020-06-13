/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import { PropsWithChildren } from 'react';

export const PageSection: React.FC<BoxProps> = ({
  children,
  ...rest
}: PropsWithChildren<BoxProps>) => (
  <Box as="section" bg="white" {...rest}>
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: 'sectionContentMax',
        width: ['90%', '90%', '90%', '70%'],
        py: [3, 4],
      }}
    >
      {children}
    </Box>
  </Box>
);
export default PageSection;
