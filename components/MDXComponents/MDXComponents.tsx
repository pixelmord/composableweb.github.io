/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Heading, HeadingProps, Link } from '@chakra-ui/core';
import { PropsWithChildren } from 'react';

const AnchorHeading: React.FC<HeadingProps> = ({
  children,
  id,
  ...rest
}: PropsWithChildren<HeadingProps & { id?: string }>) => (
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
      <Link aria-label="anchor" ml="0.375rem" color="blue.500" css={{ opacity: 0 }} href={`#${id}`}>
        #
      </Link>
    )}
  </Heading>
);

export const MDXComponents = {
  // eslint-disable-next-line react/display-name
  h2: (props: PropsWithChildren<{ id?: string }>): React.ReactElement => <AnchorHeading as="h2" {...props} />,
  // eslint-disable-next-line react/display-name
  h3: (props: PropsWithChildren<{ id?: string }>): React.ReactElement => <AnchorHeading as="h3" {...props} />,
};
export default MDXComponents;
