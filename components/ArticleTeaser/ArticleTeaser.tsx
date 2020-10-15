import { Box, BoxProps, HStack, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/core';
import { format } from 'date-fns';

import { PostFrontmatter } from '~lib/contentTypes';
import Heading from '~components/Heading';
import NextLink from '~components/NextLink';
import { slugFromFilepath } from '~lib/slugHelpers';
import { FiTag } from 'react-icons/fi';
export type ArticleTeaserProps = BoxProps & {
  post: PostFrontmatter & { fileRelativePath: string };
  contentType: string;
};
export const ArticleTeaser: React.FC<ArticleTeaserProps> = ({ post, contentType, ...props }: ArticleTeaserProps) => {
  const humanReadableDate = format(new Date(post.publishedAt), 'MMMM dd, yyyy');
  const date = format(new Date(post.publishedAt), 'yyyy-MM-dd');
  return (
    <Box {...props} as="article">
      <Box
        as="time"
        sx={{
          color: 'gray.500',
          fontSize: '0.77778rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
        dateTime={date}
      >
        {humanReadableDate}
      </Box>
      <Heading mt={0} mb={1}>
        <NextLink href={`/${contentType}/${slugFromFilepath(post.fileRelativePath)}`}>{post.title}</NextLink>
      </Heading>

      {post.summary && (
        <Text as="p" mb={2}>
          {post.summary}
        </Text>
      )}
      <HStack spacing={2}>
        {post.tags.map((tag) => (
          <Tag size="sm" key={tag} variant="subtle" colorScheme="cyan" borderRadius="lg" pb={1} px={2}>
            <TagLeftIcon boxSize="12px" as={FiTag} mt={1} />
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
        {/* <Tag size="sm" variant="subtle" colorScheme="blue" borderRadius="lg" pb={1} px={2}>
          <TagLeftIcon boxSize="12px" as={FiTag} mt={1} />
          <TagLabel>{post.readingTime.text}</TagLabel>
        </Tag> */}
      </HStack>
    </Box>
  );
};
export default ArticleTeaser;
