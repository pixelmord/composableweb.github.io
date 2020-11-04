import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import dynamic from 'next/dynamic';
import fg from 'fast-glob';
import fs from 'fs';

import { GithubPreviewProps } from 'next-tinacms-github';

import { getMarkdownProps } from '~lib/server/utils';
import { slugFromFilepath } from 'lib/slugHelpers';
import { MarkdownPageProps, MarkdownFileData } from '~lib/propTypes';
import { CodeRecipeFrontmatter } from '~lib/contentTypes';
import { Article } from '~components/Article';
import { Spinner } from '@chakra-ui/core';

const ArticleEditable = dynamic(() => import('~components/ArticleEditable'), {
  loading: () => <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />,
});
export type ArticleProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function ArticlePage(props: ArticleProps): React.ReactElement {
  const router = useRouter();

  if (!router.isFallback && !props.file) {
    return <ErrorPage statusCode={404} />;
  }
  // in cases router params was not defined yet, file cannot be loaded in getStaticProps
  // @see: https://github.com/vercel/next.js/issues/8259
  if (!props.file) {
    return null;
  }
  if (props.preview) {
    return <ArticleEditable {...props} />;
  }
  return <Article {...props} />;
}

export const getStaticProps: GetStaticProps<
  | MarkdownPageProps<CodeRecipeFrontmatter>
  | GithubPreviewProps<MarkdownFileData<CodeRecipeFrontmatter>>['props']
  | { preview: boolean; file: boolean }
> = async function ({ preview, previewData, params: { slug, contentType } }) {
  if (!slug || !slug.length) {
    return { preview, file: false };
  }

  if (fs.existsSync(`${slug}.mdx`)) {
    return await getMarkdownProps<CodeRecipeFrontmatter>(contentType as string, `${slug}.mdx`, preview, previewData);
  } else if (fs.existsSync(`${slug}.md`)) {
    return await getMarkdownProps<CodeRecipeFrontmatter>(contentType as string, `${slug}.md`, preview, previewData);
  }

  return { preview, file: false };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const directories = await fg(`**`, { onlyDirectories: true, cwd: './content', deep: 1 });
  const posts = await Promise.all(
    directories.map((dir) =>
      fg(`${dir}/*.{md,mdx}`, { onlyFiles: true, cwd: './content', deep: 1 }).then((paths) =>
        paths.map((path) => ({
          path,
          dir,
        }))
      )
    )
  );
  return {
    paths: posts.flat().map((post) => {
      return {
        params: {
          slug: `${slugFromFilepath(post.path)}`,
          contentType: post.dir,
        },
      };
    }),
    fallback: true,
  };
};
