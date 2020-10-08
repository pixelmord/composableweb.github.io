/** @jsx jsx */
import { jsx } from '@emotion/core';

import { usePlugin } from 'tinacms';
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github';
import { InlineImage, InlineText, InlineTextarea } from 'react-tinacms-inline';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Avatar, Box, Divider, Flex, Grid, Link, Stack, Text } from '@chakra-ui/core';
import { Phone, Mail, Link as FeatherLink, Linkedin, Twitter, GitHub } from 'react-feather';

import { ResumeData } from 'lib/contentTypes';

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

const socialIcons = {
  Twitter,
  GitHub,
  LinkedIn: Linkedin,
};
const Resume: NextPage<ResumePageProps> = ({ file, preview }) => {
  const formOptions = {
    label: 'Resume',
    fields: [
      {
        label: 'Basics',
        name: 'basics',
        component: 'group',
        fields: [
          { name: 'name', component: 'text', label: 'Name' },
          { name: 'label', component: 'text', label: 'Job Title' },
          { name: 'email', component: 'text', label: 'Email' },
          { name: 'phone', component: 'text', label: 'Phone' },
          { name: 'website', component: 'text', label: 'Website' },
          { name: 'summary', component: 'textarea', label: 'Summary' },
          {
            name: 'picture',
            component: 'image',
            label: 'Photo',
            uploadDir: () => {
              return '/static/images/';
            },

            parse: (filename) => `/static/images/${filename}`,
            previewSrc: (formValues) => `${formValues.basics.picture}`,
          },
        ],
      },
    ],
  };
  const [data, form] = useGithubJsonForm(file as GitFile<ResumeData>, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();
  return (
    <OpenAuthoringInlineForm form={form} path={file.fileRelativePath} preview={preview}>
      <ArticleLayout>
        <Grid backgroundColor="white" templateColumns="2.5fr 1fr" maxWidth="1100px" mx="auto" boxShadow="lg">
          <Box p={10}>
            <Heading as="h2" size="lg">
              Profile
            </Heading>

            <InlineTextarea name="basics.summary" />
          </Box>
          <Box backgroundColor="gray.300">
            <Stack backgroundColor="gray.500" textAlign="center" p={10}>
              <InlineImage
                name="basics.picture"
                parse={(filename) => (filename ? `/static/images/${filename}` : null)}
                uploadDir={() => '/static/images/'}
                previewSrc={(formValues) => formValues.basics.picture}
              >
                {(props) => (
                  <Avatar
                    size="xl"
                    w={['48px', '48px', '48px', '130px']}
                    h={['48px', '48px', '48px', '130px']}
                    name="Andreas Adam"
                    mx="auto"
                    src={props?.previewSrc || data.basics.picture}
                  />
                )}
              </InlineImage>
              <Heading as="h2" size="xl">
                <InlineText name="basics.name" />
              </Heading>
              <Heading as="h3" size="md">
                <InlineText name="basics.label" />
              </Heading>
            </Stack>

            <Stack px={5} py={5} gridGap={1}>
              <Flex fontSize="md" alignItems="center">
                <Box as={Mail} mr={2} size="16px" color="cyan.900" />
                <Link href={`mailto:${data.basics.email}`}>
                  <InlineText name="basics.email" />
                </Link>
              </Flex>
              <Flex fontSize="md" alignItems="center">
                <Box as={Phone} mr={2} size="16px" color="cyan.900" />
                <Link href={`tel:${data.basics.phone}`}>
                  <InlineText name="basics.phone" />
                </Link>
              </Flex>
              <Flex fontSize="md" alignItems="center">
                <Box as={FeatherLink} mr={2} size="16px" color="cyan.900" />
                <Link href={data.basics.website}>
                  <InlineText name="basics.website" />
                </Link>
              </Flex>
              <Divider />
              {data.basics.profiles.length &&
                data.basics.profiles.map((profile) => (
                  <Flex key={profile.url} fontSize="md" alignItems="center">
                    <Box as={socialIcons[profile.network]} mr={2} size="16px" color="cyan.900" />
                    <Link href={profile.url}>{profile.username}</Link>
                  </Flex>
                ))}
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
