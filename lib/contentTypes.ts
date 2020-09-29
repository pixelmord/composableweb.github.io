import { NextPage } from 'next';
import { GitFile } from 'react-tinacms-github/dist/form/useGitFileSha';

export type BlogFrontmatter = {
  title: string;
  createdAt: string;
  publishedAt: string;
  draft: 'true' | 'false';
};

export type CodeRecipeFrontmatter = {
  title: string;
  createdAt: string;
  publishedAt: string;
  draft: 'true' | 'false';
};

export type PageData = {
  title: string;
  metaTitle: string;
};

export type NextPageWithDataProps = {
  preview: boolean;
  file: GitFile<PageData>;
};
export type NextPageWithData = NextPage<NextPageWithDataProps>;
