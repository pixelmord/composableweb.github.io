const withPlugins = require('next-compose-plugins');
const readingTime = require('reading-time');
const mdxPrism = require('mdx-prism');
const optimizedImages = require('next-optimized-images');
const withMDX = require('next-mdx-enhanced')({
  layoutPath: 'layouts',
  defaultLayout: true,
  remarkPlugins: [require('remark-slug'), require('remark-autolink-headings'), require('remark-code-titles')],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      const parts = frontMatter.__resourcePath.split('/');
      return {
        wordCount: mdxContent.split(/\s+/gu).length,
        readingTime: readingTime(mdxContent),
        path: frontMatter.__resourcePath.replace('.mdx', ''),
        slug: parts[parts.length - 1].split('.').slice(0, -1).join('.'),
      };
    },
  },
});

module.exports = withPlugins(
  [
    [withMDX],
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
        responsive: {
          adapter: require('responsive-loader/sharp'),
        },
      },
    ],

    // your other plugins here
  ],
  {
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  }
);
