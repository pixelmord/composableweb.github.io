/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, Heading } from '@chakra-ui/core';
import React from 'react';
import ArticleLayout from '~components/ArticleLayout';

import { parseISO, format } from 'date-fns';
import { FrontMatter } from 'types/mdx';

const BlogMDXLayout: React.FC = ({
  children,
  frontMatter: { title, publishedAt },
}: React.PropsWithChildren<{ frontMatter: FrontMatter }>) => {
  return (
    <ArticleLayout>
      <Heading as="h1">{title}</Heading>
      <Box>
        <time
          css={{
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
    </ArticleLayout>
  );
};
export default BlogMDXLayout;
