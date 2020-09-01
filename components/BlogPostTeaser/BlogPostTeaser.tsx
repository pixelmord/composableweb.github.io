/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import { FrontMatter } from 'types/mdx';
import { Heading } from 'prestyled';
import NextLink from '~components/NextLink';

export type BlogPostProps = BoxProps & FrontMatter;
export const BlogPostTeaser: React.FC<BoxProps> = ({
  title,
  path,
  readingTime,
}: PropsWithoutRef<PropsWithChildren<BlogPostProps>>) => (
  <NextLink sx={{ textDecoration: 'none' }} href={`${path}`}>
    <Heading as="h2">{title}</Heading>
    <Box>{readingTime.text}</Box>
  </NextLink>
);
export default BlogPostTeaser;
