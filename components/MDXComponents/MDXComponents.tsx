/** @jsx jsx */
import { jsx, HeadingProps } from 'theme-ui';
import { PropsWithChildren } from 'react';
import { Heading, Link } from 'prestyled';

const AnchorHeading: React.FC<HeadingProps> = ({
  children,
  id,
  ...rest
}: PropsWithChildren<HeadingProps & { id?: string }>) => (
  <Heading
    {...rest}
    sx={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]:hover a': { opacity: 1, color: 'primary' },
    }}
    id={id}
  >
    {children}
    {id && (
      <Link aria-label="anchor" sx={{ opacity: 0, ml: 1, color: 'primary' }} href={`#${id}`}>
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
