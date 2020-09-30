import { NextPage } from 'next';
import { GitFile } from 'react-tinacms-github/dist/form/useGitFileSha';

export type PostFrontmatter = {
  title: string;
  createdAt: string;
  publishedAt: string;
  draft: boolean;
};

export type BlogFrontmatter = PostFrontmatter;

export type CodeRecipeFrontmatter = PostFrontmatter;
export type PageFrontmatter = PostFrontmatter;

export type PageData = {
  title: string;
  metaTitle: string;
};

export type NextPageWithDataProps = {
  preview: boolean;
  file: GitFile<PageData>;
};
export type NextPageWithData = NextPage<NextPageWithDataProps>;
