import common from './common';

export default {
  openGraph: {
    url: common.url,
    title: common.title,
    description: 'Advocating the Composable Web.',
    images: [
      {
        url: 'https://composableweb.com/static/images/banner.png',
        width: 1200,
        height: 630,
        alt: `${common.title} | ${common.tagline}`,
      },
    ],
    site_name: 'ComposableWEB',
  },
  twitter: {
    handle: '@composable_web',
    site: '@composable_web',
    cardType: 'summary_large_image',
  },
};
