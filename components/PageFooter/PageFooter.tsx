/** @jsx jsx */
import { jsx, Flex, BoxProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import { LandingPageSection, LandingPageSectionContent } from 'prestyled';

export const PageFooter: React.FC<BoxProps> = ({ children, ...rest }: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <LandingPageSection as="footer" bg="grayDarkest" {...rest}>
    <LandingPageSectionContent py={[3, 3, 4]}>
      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>{children}</Flex>
    </LandingPageSectionContent>
  </LandingPageSection>
);
export default PageFooter;
