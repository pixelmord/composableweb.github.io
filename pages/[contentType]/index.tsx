/** @jsx jsx */
import { jsx } from '@emotion/core';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Text } from '@chakra-ui/core';
import fg from 'fast-glob';

import { fetchAllMarkdownDocs } from '~lib/server/utils';
import NextLink from '~components/NextLink';
import { PostFrontmatter } from '~lib/contentTypes';
import { MarkdownFileProps } from '~lib/propTypes';
import { slugFromFilepath } from '~lib/slugHelpers';
import ThreeDixelDrawing from '~components/ThreeDixelDrawing';

const url = 'https://composableweb.com/blog';
const title = 'Blog – ComposableWeb - Andreas Adam (@pixelmord)';
const description =
  'Ideas and experiments in rapid prototyping, Front-End Development, technical leadership and enterprise architecture';

export type RecipeOverviewpageProps = {
  posts: MarkdownFileProps<PostFrontmatter>[];
  preview: boolean;
  contentType: string;
};

const RecipeOverviewPage: NextPage<RecipeOverviewpageProps> = ({ posts, contentType }: RecipeOverviewpageProps) => {
  const filteredPosts = posts
    .filter((post) => !post.data.frontmatter.draft)
    .sort(
      (a, b) => Number(new Date(b.data.frontmatter.publishedAt)) - Number(new Date(a.data.frontmatter.publishedAt))
    );
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
      {!filteredPosts.length && (
        <>
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
          <Text css={{ textAlign: 'center' }}>Constant procrastination led to an empty page</Text>
        </>
      )}
      {!!filteredPosts.length &&
        filteredPosts.map((post) => (
          <NextLink key={post.fileRelativePath} href={`/${contentType}/${slugFromFilepath(post.fileRelativePath)}`}>
            {post.data.frontmatter.title}
          </NextLink>
        ))}
    </>
  );
};
export default RecipeOverviewPage;

export const getStaticProps: GetStaticProps<RecipeOverviewpageProps> = async ({
  preview,
  params: { contentType },
}: GetStaticPropsContext<{ contentType: string }>) => {
  const posts = await fetchAllMarkdownDocs<PostFrontmatter>(contentType as string);
  return {
    props: {
      posts,
      contentType,
      preview: preview || false,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const directories = await fg(`**`, { onlyDirectories: true, cwd: './content', deep: 1 });
  return {
    paths: directories.map((directory) => {
      return {
        params: {
          contentType: directory,
        },
      };
    }),
    fallback: true,
  };
};
