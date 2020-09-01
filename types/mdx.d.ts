// types/mdx.d.ts
export type FrontMatter = {
  __resourcePath: string;
  title: string;
  publishedAt: string;
  createdAt: string;
  by?: string;
  layout?: string;
  path: string;
  slug: string;
  readingTime: { text: string };
};
declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: FrontMatter[] | Frontmatter;
}
