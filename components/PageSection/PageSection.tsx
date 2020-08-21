/** @jsx jsx */
import { jsx, BoxProps } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { LandingPageSection, LandingPageSectionContent } from '~components/prestyled';

export const PageSection: React.FC<BoxProps> = ({ children, ...rest }: PropsWithChildren<BoxProps>) => (
  <LandingPageSection {...rest}>
    <LandingPageSectionContent>{children}</LandingPageSectionContent>
  </LandingPageSection>
);
export default PageSection;
