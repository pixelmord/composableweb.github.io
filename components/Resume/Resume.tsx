import { Avatar, Box, Divider, Flex, Grid, Link, Stack, Text } from '@chakra-ui/core';
import { FiPhone, FiMail, FiLink, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

import ArticleLayout from '~components/ArticleLayout';
import Heading from '~components/Heading';

import { ResumePageProps } from '../../pages/resume/[lang]';

const socialIcons = {
  Twitter: FiTwitter,
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
};
const Resume: React.FC<ResumePageProps> = ({ file: { data } }) => {
  return (
    <ArticleLayout>
      <Grid
        backgroundColor="white"
        templateColumns={{ base: '1fr', lg: '2.5fr 1fr' }}
        maxWidth="1100px"
        mx="auto"
        boxShadow="lg"
      >
        <Box p={10}>
          <Heading as="h2" size="lg">
            Profile
          </Heading>

          <Text as="p">{data.basics.summary}</Text>
        </Box>
        <Box backgroundColor="gray.300">
          <Stack backgroundColor="gray.500" textAlign="center" p={10}>
            <Avatar
              size="xl"
              w={['48px', '48px', '48px', '130px']}
              h={['48px', '48px', '48px', '130px']}
              name="Andreas Adam"
              mx="auto"
              src={data.basics.picture}
            />

            <Heading as="h2" size="xl">
              {data.basics.name}
            </Heading>
            <Heading as="h3" size="md">
              {data.basics.label}
            </Heading>
          </Stack>

          <Stack px={5} py={5} gridGap={1}>
            <Flex fontSize="md" alignItems="center">
              <Box as={FiMail} mr={2} w="16px" h="16px" color="cyan.900" />
              <Link href={`mailto:${data.basics.email}`}>{data.basics.email}</Link>
            </Flex>
            <Flex fontSize="md" alignItems="center">
              <Box as={FiPhone} mr={2} w="16px" h="16px" color="cyan.900" />
              <Link href={`tel:${data.basics.phone}`}>{data.basics.phone}</Link>
            </Flex>
            <Flex fontSize="md" alignItems="center">
              <Box as={FiLink} mr={2} w="16px" h="16px" color="cyan.900" />
              <Link href={data.basics.website}>{data.basics.website}</Link>
            </Flex>
            <Divider />
            {data.basics.profiles.length &&
              data.basics.profiles.map((profile) => (
                <Flex key={profile.url} fontSize="md" alignItems="center">
                  <Box as={socialIcons[profile.network]} mr={2} w="16px" h="16px" color="cyan.900" />
                  <Link href={profile.url}>{profile.username}</Link>
                </Flex>
              ))}
          </Stack>
        </Box>
      </Grid>
    </ArticleLayout>
  );
};
export default Resume;
