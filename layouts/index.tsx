import React from 'react';
import PageSection from '~components/PageSection';

//import { parseISO, format } from 'date-fns';

const DefaultMDXLayout = ({ children }) => {
  // const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');

  return <PageSection>{children}</PageSection>;
};
export default DefaultMDXLayout;
