/** @jsx jsx */
import { jsx } from 'theme-ui';
import { NextSeo } from 'next-seo';
import BlogPostTeaser from '~components/BlogPostTeaser';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { frontMatter as blogPosts } from './blog/**/*.mdx';

import PageSection from '~components/PageSection';

import { Text } from 'prestyled';
import ThreeDixelDrawing from '~components/ThreeDixelDrawing';

const url = 'https://composableweb.com/blog';
const title = 'Blog – ComposableWeb - Andreas Adam (@pixelmord)';
const description =
  'Ideas and experiments in rapid prototyping, Front-End Development, technical leadership and enterprise architecture';
const Blog = () => {
  const filteredBlogPosts = blogPosts
    .filter((post) => !post.draft)
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <PageSection>
        <ThreeDixelDrawing
          matrix={[
            [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          ]}
        />
        {!filteredBlogPosts.length && (
          <Text sx={{ textAlign: 'center' }}>Constant procrastination led to an empty page</Text>
        )}
        {filteredBlogPosts.map((post) => (
          <BlogPostTeaser {...post} key={post.title} />
        ))}
      </PageSection>
    </>
  );
};
export default Blog;
