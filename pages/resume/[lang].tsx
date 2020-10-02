/** @jsx jsx */
import { jsx } from '@emotion/core';

import { usePlugin } from 'tinacms';
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github';
import { InlineText } from 'react-tinacms-inline';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { ResumeData } from 'lib/contentTypes';
import { Box, Grid, Stack } from '@chakra-ui/core';

import { GitFile } from 'react-tinacms-github/dist/form/useGitFileSha';
import OpenAuthoringInlineForm from '~components/OpenAuthoringInlineForm';
import ArticleLayout from '~components/ArticleLayout';
import Heading from '~components/Heading';
export type ResumePageProps = {
  file: {
    data: ResumeData;
    fileRelativePath: string;
  };
};
const Resume: NextPage<ResumePageProps> = ({ file, preview }) => {
  const formOptions = {
    label: 'Resume',
    fields: [
      { name: 'basics.name', component: 'text' },
      { name: 'basics.title', component: 'text' },
    ],
  };
  const [data, form] = useGithubJsonForm(file as GitFile<ResumeData>, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();
  return (
    <OpenAuthoringInlineForm form={form} path={file.fileRelativePath} preview={preview}>
      <ArticleLayout>
        <Grid backgroundColor="white" templateColumns="2.5fr 1fr" maxWidth="1100px" mx="auto">
          <Box>
            <Heading as="h2" size="lg">
              <InlineText name="basics.name" />
            </Heading>
          </Box>
          <Box backgroundColor="teal.700">
            <Stack backgroundColor="teal.500">
              <Heading as="h2" size="lg">
                <InlineText name="basics.name" />
              </Heading>
            </Stack>
            <Stack>
              <Heading as="h2" size="lg">
                <InlineText name="basics.name" />
              </Heading>
            </Stack>
          </Box>
        </Grid>
      </ArticleLayout>
    </OpenAuthoringInlineForm>
  );
};
export default Resume;

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({ preview, previewData, params: { lang } }) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      head_branch: process.env.NEXT_PUBLIC_BASE_BRANCH,
      fileRelativePath: `content/page-data/resume.${lang}.json`,
      parse: parseJson,
    });
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: `content/page-data/resume.${lang}.json`,
        data: (await import(`../../content/page-data/resume.${lang}.json`)).default,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const languages = ['en', 'de'];
  return {
    paths: languages.map((lang) => {
      return {
        params: {
          lang,
        },
      };
    }),
    fallback: false,
  };
};
