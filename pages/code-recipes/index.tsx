/** @jsx jsx */
import { jsx } from '@emotion/core';
import PageLayout from '~components/PageLayout';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Text } from '@chakra-ui/core';

import { fetchAllMarkdownDocs } from '~lib/server/utils';
import NextLink from '~components/NextLink';
import { CodeRecipeFrontmatter } from '~lib/contentTypes';
import { MarkdownFileProps } from '~lib/propTypes';
import { slugFromFilepath } from '~lib/slugHelpers';
import ThreeDixelDrawing from '~components/ThreeDixelDrawing';

const url = 'https://composableweb.com/blog';
const title = 'Blog – ComposableWeb - Andreas Adam (@pixelmord)';
const description =
  'Ideas and experiments in rapid prototyping, Front-End Development, technical leadership and enterprise architecture';

export type RecipeOverviewpageProps = { posts: MarkdownFileProps<CodeRecipeFrontmatter>[] };

const RecipeOverviewPage: NextPage<RecipeOverviewpageProps> = ({ posts }: RecipeOverviewpageProps) => {
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
          <Text sx={{ textAlign: 'center' }}>Constant procrastination led to an empty page</Text>
        </>
      )}
      {!!filteredPosts.length &&
        filteredPosts.map((recipe) => (
          <NextLink key={recipe.fileRelativePath} href={`/code-recipes/${slugFromFilepath(recipe.fileRelativePath)}`}>
            {recipe.data.frontmatter.title}
          </NextLink>
        ))}
    </>
  );
};
export default RecipeOverviewPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchAllMarkdownDocs<CodeRecipeFrontmatter>('code-recipes');
  return {
    props: {
      posts,
    },
  };
};
