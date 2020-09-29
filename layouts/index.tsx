import React from 'react';
import ArticleLayout from '~components/ArticleLayout';

//import { parseISO, format } from 'date-fns';

const DefaultMDXLayout = ({ children }) => {
  // const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');

  return <ArticleLayout>{children}</ArticleLayout>;
};
export default DefaultMDXLayout;
