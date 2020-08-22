const withPlugins = require('next-compose-plugins');
const readingTime = require('reading-time');
const mdxPrism = require('mdx-prism');
const optimizedImages = require('next-optimized-images');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles')],
    rehypePlugins: [mdxPrism],
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
