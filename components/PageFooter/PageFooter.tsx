/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const PageFooter: React.FC<BoxProps> = ({
  children,
  ...rest
}: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box as="footer" bg="grayDarkest" {...rest}>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 10rem',
        gridTemplateRows: 'auto',
        margin: '0 auto',
        maxWidth: 'sectionContentMax',
        width: ['90%', '90%', '90%', '70%'],
        py: '1.45rem',
      }}
    >
      {children}
    </Box>
  </Box>
);
export default PageFooter;
