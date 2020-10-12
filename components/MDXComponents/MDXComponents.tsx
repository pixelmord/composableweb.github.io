/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, Callout, Code, HeadingProps, Kbd, Link, Text, Divider, useColorMode } from '@chakra-ui/core';
import { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { ThemeProvider } from '@chakra-ui/core';

import theme from '../../styles';
import Heading from '~components/Heading';

const Table = (props) => (
  <Box overflowX="scroll" w="full">
    <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
  </Box>
);

const THead = (props) => {
  const { colorMode } = useColorMode();
  const bg = {
    light: 'gray.50',
    dark: 'whiteAlpha.100',
  };

  return <Box as="th" bg={bg[colorMode]} fontWeight="semibold" p={2} fontSize="sm" {...props} />;
};

const TData = (props) => (
  <Box as="td" p={2} borderTopWidth="1px" borderColor="inherit" fontSize="sm" whiteSpace="normal" {...props} />
);

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)',
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900',
  };

  return (
    <Callout
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};
const AnchorHeading: React.FC<HeadingProps> = ({
  children,
  id,
  ...rest
}: PropsWithChildren<HeadingProps & { id?: string }>) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)',
  };
  return (
    <Heading
      {...rest}
      css={{
        scrollMarginTop: '100px',
        scrollSnapMargin: '100px', // Safari
        '&[id]:hover a': { opacity: 1, color: 'primary' },
      }}
      id={id}
    >
      {children}
      {id && (
        <Link aria-label="anchor" ml="0.375rem" color={color[colorMode]} css={{ opacity: 0 }} href={`#${id}`}>
          #
        </Link>
      )}
    </Heading>
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

export const MDXComponents = {
  h1: (props) => (
    <ThemeProvider theme={theme}>
      <Heading as="h1" size="xl" my={4} {...props} />
    </ThemeProvider>
  ),
  h2: (props: PropsWithChildren<{ id?: string }>): React.ReactElement => (
    <ThemeProvider theme={theme}>
      <AnchorHeading as="h2" size="lg" {...props} />
    </ThemeProvider>
  ),
  h3: (props: PropsWithChildren<{ id?: string }>): React.ReactElement => (
    <ThemeProvider theme={theme}>
      <AnchorHeading as="h3" size="md" {...props} />
    </ThemeProvider>
  ),
  inlineCode: (props) => (
    <ThemeProvider theme={theme}>
      <Code variantColor="yellow" fontSize="0.84em" {...props} />
    </ThemeProvider>
  ),
  kbd: Kbd,
  br: (props) => (
    <ThemeProvider theme={theme}>
      <Box as="br" height="24px" {...props} />
    </ThemeProvider>
  ),
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => (
    <ThemeProvider theme={theme}>
      <Text as="p" mt={2} lineHeight="tall" {...props} />
    </ThemeProvider>
  ),
  ul: (props) => (
    <ThemeProvider theme={theme}>
      <Box as="ul" pt={2} pl={4} ml={2} {...props} />
    </ThemeProvider>
  ),
  ol: (props) => (
    <ThemeProvider theme={theme}>
      <Box as="ol" pt={2} pl={4} ml={2} {...props} />
    </ThemeProvider>
  ),
  li: (props) => (
    <ThemeProvider theme={theme}>
      <Box as="li" pb={1} {...props} />
    </ThemeProvider>
  ),
  blockquote: Quote,
};
export default MDXComponents;
