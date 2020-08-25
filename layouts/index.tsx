import React from 'react';
import PageSection from '~components/PageSection';

//import { parseISO, format } from 'date-fns';

const DefaultMDXLayout = (): React.FC => {
  // const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');
  const layout = ({ children }) => {
    return <PageSection>{children}</PageSection>;
  };
  return layout;
};
export default DefaultMDXLayout;
