const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [
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
    // next core options
    pageExtensions: ['ts', 'tsx'],
  }
);
