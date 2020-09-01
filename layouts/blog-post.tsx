/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React from 'react';
import PageSection from '~components/PageSection';

import { parseISO, format } from 'date-fns';
import { Heading } from 'prestyled';
import { FrontMatter } from 'types/mdx';

const BlogMDXLayout: React.FC = ({
  children,
  frontMatter: { title, publishedAt },
}: React.PropsWithChildren<{ frontMatter: FrontMatter }>) => {
  return (
    <PageSection>
      <Heading as="h1">{title}</Heading>
      <Box>
        <time
          sx={{
            color: 'grayDark',
            fontSize: '0.77778rem',
            letterSpacing: '2px',
            marginBottom: '1.42857em',
            textTransform: 'uppercase',
          }}
          dateTime={publishedAt}
        >
          {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
        </time>
      </Box>
      {children}
    </PageSection>
  );
};
export default BlogMDXLayout;
