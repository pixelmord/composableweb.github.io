/** @jsx jsx */
import { jsx } from '@emotion/core';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Form, usePlugin } from 'tinacms';
import { InlineWysiwyg } from 'react-tinacms-editor';
import { InlineText } from 'react-tinacms-inline';

import fg from 'fast-glob';
import { useGithubMarkdownForm } from 'react-tinacms-github';
import { GithubPreviewProps } from 'next-tinacms-github';
import { GitFile } from 'react-tinacms-github/dist/form/useGitFileSha';

import { getMarkdownProps } from '~lib/server/utils';
import { CodeRecipeFrontmatter } from '~lib/contentTypes';
import { slugFromFilepath } from 'lib/slugHelpers';

import { MarkdownPageProps, MarkdownFileData } from '~lib/propTypes';
import Layout from '~components/ArticleLayout';
import OpenAuthoringInlineForm from '~components/OpenAuthoringInlineForm';
import { Heading } from '@chakra-ui/core';
import TinaEditLink from '~components/TinaEditLink';

import { mdxHydrateMarkdown } from '~lib/client/utils';

const Recipe = ({ file, preview }: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const router = useRouter();

  const formConfig = {
    label: 'Recipe',
    fields: [
      {
        name: 'frontmatter.title',
        label: 'Recipe Title',
        component: 'text',
      },
      {
        name: 'markdownBody',
        label: 'Content',
        component: 'markdown',
      },
    ],
  };

  // Registers Tina Form
  const [data, form] = useGithubMarkdownForm(file as GitFile<MarkdownFileData<CodeRecipeFrontmatter>>, formConfig) as [
    MarkdownFileData<CodeRecipeFrontmatter>,
    Form
  ];
  usePlugin(form);

  const frontmatter = data.frontmatter;
  const markdownBody = data.markdownBody;
  const markdown = mdxHydrateMarkdown(file.data.markdownObject, { scope: frontmatter });
  return (
    <OpenAuthoringInlineForm form={form} path={file.fileRelativePath} preview={preview}>
      <TinaEditLink />
      <Layout>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <Heading as="h1">
              <InlineText name="frontmatter.title" />
            </Heading>
            {preview ? (
              <InlineWysiwyg name="markdownBody" format="markdown">
                {markdownBody}
              </InlineWysiwyg>
            ) : (
              markdown
            )}
          </>
        )}
      </Layout>
    </OpenAuthoringInlineForm>
  );
};
export default function RecipePage(props: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
  const router = useRouter();

  if (!router.isFallback && !props.file) {
    return <ErrorPage statusCode={404} />;
  }
  // in cases router params was not defined yet, file cannot be loaded in getStaticProps
  // @see: https://github.com/vercel/next.js/issues/8259
  if (!props.file) {
    return null;
  }
  return <Recipe {...props} />;
}

export const getStaticProps: GetStaticProps<
  MarkdownPageProps<CodeRecipeFrontmatter> | GithubPreviewProps<CodeRecipeFrontmatter>['props']
> = async function ({ preview, previewData, params: { slug, contentType } }) {
  const props = await getMarkdownProps<CodeRecipeFrontmatter>(
    contentType as string,
    `${slug}.mdx`,
    preview,
    previewData
  );

  return props;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const directories = await fg(`**`, { onlyDirectories: true, cwd: './content', deep: 1 });
  const posts = await Promise.all(
    directories.map((dir) => fg(`${dir}/*.{md,mdx}`, { onlyFiles: true, cwd: './content', deep: 1 }))
  );
  return {
    paths: directories.flatMap((contentType) =>
      posts.flat().map((post) => {
        return {
          params: {
            slug: `${contentType}/${slugFromFilepath(post)}`,
            contentType,
          },
        };
      })
    ),
    fallback: true,
  };
};
