import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkCodeTitles from 'remark-code-titles';
import readingTime from 'reading-time';

import MDXComponents from '~components/MDXComponents';

export const mdxRemoteOptions = {
  components: MDXComponents,
  mdxOptions: {
    remarkPlugins: [remarkSlug, remarkAutolinkHeadings, remarkCodeTitles],
    rehypePlugins: [mdxPrism],
    compilers: [],
    filepath: '/some/file/path',
  },
};

export const mdxMatter = (file) => {
  const { content, data } = matter(file);
  const dataReadingTime = enhanceFrontmatterReadingTime(content);
  return { content, data: { ...data, ...dataReadingTime } };
};

export const enhanceFrontmatterReadingTime = (mdxContent) => {
  return {
    wordCount: mdxContent.split(/\s+/gu).length,
    readingTime: readingTime(mdxContent),
  };
};
export const enhanceFrontmatterPath = (frontMatter) => {
  const parts = frontMatter.__resourcePath.split('/');
  return {
    path: frontMatter.__resourcePath.replace('.mdx', ''),
    slug: parts[parts.length - 1].split('.').slice(0, -1).join('.'),
  };
};
