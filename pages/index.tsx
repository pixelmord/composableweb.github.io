/** @jsx jsx */
import { jsx } from 'theme-ui';
import { NextPage } from 'next';
import PageSection from '~components/PageSection';
import { Heading, Text } from 'prestyled';

const Home: NextPage = () => {
  return (
    <PageSection variant="primary" sx={{ textAlign: 'center' }}>
      <Heading as="h1">Rapid prototyping for the web</Heading>
      <Heading as="h2" variant="h3">
        Enterprise ready modern frontends backed by serverless microservices
      </Heading>
      <Text as="p">
        The biggest advantage of using web-technology for building applications is the ability to deliver incremental
        results fast. <br />
        That fits right into an agile mindset, where short cycles of development lead from idea to prototype to usable
        software that can be incrementally shipped.
      </Text>
      <Text as="p">
        A vast ecosystem of open-source software lets you stand on the shoulders of giants and keep your focus on
        delivering value for your core vision.
      </Text>
    </PageSection>
  );
};
export default Home;
