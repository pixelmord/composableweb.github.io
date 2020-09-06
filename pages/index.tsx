/** @jsx jsx */
import { jsx } from 'theme-ui';
import { NextPage } from 'next';
import PageSection from '~components/PageSection';
import { Heading, Text } from 'prestyled';

const Home: NextPage = () => {
  return (
    <PageSection variant="primary" sx={{ textAlign: 'center' }}>
      <Heading as="h1">We focus on rapid prototyping for the web</Heading>
      <Heading as="h2" variant="h3">
        Enterprise ready rapid development of modern frontends backed by serverless microservices
      </Heading>
      <Text as="p">ComposableWeb is focussed on rapid delivery with an agile mindset</Text>
    </PageSection>
  );
};
export default Home;
