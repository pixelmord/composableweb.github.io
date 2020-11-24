---
to: "<%= h.src() %>/pages/<%= name %>.tsx"
---
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import PageLayout from '../components/PageLayout';

export type <%= Name %>PageProps = {
  file: {
    data: any;
    fileRelativePath: string;
  };
  preview: boolean;
};
const <%= Name %>Page: NextPage = () => {
  const router = useRouter();
  if (!router.isFallback && !props.file) {
    return <ErrorPage statusCode={404} />;
  }
  // in cases router params was not defined yet, file cannot be loaded in getStaticProps
  // @see: https://github.com/vercel/next.js/issues/8259
  if (!props.file) {
    return null;
  }
  if (props.preview) {
    return (
      <>
        <NextSeo
          title={title}
          description={props.file.data.basics.summary}
          canonical={url}
          openGraph={{
            url,
            title,
            description: props.file.data.basics.summary,
          }}
        />
        <<%= Name %>Editable {...props} />
      </>
    );
  }
  return (
    <>
      <NextSeo
        title={title}
        description={props.file.data.basics.summary}
        canonical={url}
        openGraph={{
          url,
          title,
          description: props.file.data.basics.summary,
        }}
      />
      <<%= Name %> {...props} />
    </>
  );
};
export default <%= Name %>Page;
