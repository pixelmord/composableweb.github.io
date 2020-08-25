/** @jsx jsx */
import { jsx, BoxProps, Flex } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import { LandingPageSection, LandingPageSectionContent } from 'prestyled';

export const PageHeader: React.FC<BoxProps> = ({ children, ...rest }: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <LandingPageSection
    as="header"
    sx={{
      background: 'rgba(0, 134, 151, 0.55)',
    }}
    {...rest}
  >
    <LandingPageSectionContent py={[3, 3, 4]}>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>{children}</Flex>
    </LandingPageSectionContent>
  </LandingPageSection>
);
export default PageHeader;
