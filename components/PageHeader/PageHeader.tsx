/** @jsx jsx */
import { jsx, Box, BoxProps, Grid } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const PageHeader: React.FC<BoxProps> = ({ children, ...rest }: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box as="header" sx={{ background: 'white' }} {...rest}>
    <Grid
      sx={{
        gridTemplateColumns: 'auto 10rem',
        gridTemplateRows: 'auto',
        margin: '0 auto',
        maxWidth: 'sectionContentMax',
        width: ['90%', '90%', '90%', '70%'],
        py: '1.45rem',
      }}
    >
      {children}
    </Grid>
  </Box>
);
export default PageHeader;
