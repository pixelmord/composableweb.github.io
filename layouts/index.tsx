import React from 'react';

//import { parseISO, format } from 'date-fns';

export default () => {
  //const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');

  return ({ children }) => {
    return <div>{children}</div>;
  };
};
