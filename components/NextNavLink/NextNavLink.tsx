/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link, LinkProps } from '@chakra-ui/core';
import { PropsWithChildren } from 'react';
import { default as NLink, LinkProps as NLinkProps } from 'next/link';

type NextNavLinkProps = Omit<LinkProps, 'as'> & NLinkProps;
export const NextNavLink: React.FC<NextNavLinkProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch,
  ...rest
}: PropsWithChildren<NextNavLinkProps>) => {
  return (
    <NLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
    >
      <Link {...rest} textDecoration="none" mr="2" display="block" />
    </NLink>
  );
};
export default NextNavLink;
