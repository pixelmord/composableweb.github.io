/** @jsx jsx */
import { jsx } from '@emotion/core';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Form, usePlugin } from 'tinacms';
import { InlineWysiwyg } from 'react-tinacms-editor';
import { InlineText } from 'react-tinacms-inline';
import Head from 'next/head';
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

const Recipe = ({
  file,
  preview,
}:
  | MarkdownPageProps<CodeRecipeFrontmatter>
  | GithubPreviewProps<CodeRecipeFrontmatter>['props']): React.ReactElement => {
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
  const [data, form] = useGithubMarkdownForm(file as GitFile<CodeRecipeFrontmatter>, formConfig) as [
    MarkdownFileData<CodeRecipeFrontmatter>,
    Form
  ];
  usePlugin(form);

  const frontmatter = data.frontmatter;
  const markdownBody = data.markdownBody;
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
          </>
        )}
      </Layout>
    </OpenAuthoringInlineForm>
  );
};
export default function RecipePage(
  props: MarkdownPageProps<CodeRecipeFrontmatter> | GithubPreviewProps<CodeRecipeFrontmatter>['props']
): React.ReactElement {
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

export async function getStaticProps({
  preview,
  previewData,
  params,
}: GetStaticPropsContext<{ slug: string }>): Promise<
  | {
      props: MarkdownPageProps<CodeRecipeFrontmatter>;
    }
  | GithubPreviewProps<CodeRecipeFrontmatter>
> {
  const props = await getMarkdownProps<CodeRecipeFrontmatter>(
    'code-recipes',
    `${params.slug}.mdx`,
    preview,
    previewData
  );

  return props;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = await fg(`./content/code-recipes/**/*.mdx`);
  return {
    paths: recipes.map((recipe) => {
      return {
        params: {
          slug: `code-recipes/${slugFromFilepath(recipe)}`,
        },
      };
    }),
    fallback: true,
  };
};
