/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import { TinaCMS } from 'tinacms';

export interface EditLinkProps {
  cms: TinaCMS;
}
export const TinaEditLink: React.FC<EditLinkProps> = ({ cms }: PropsWithoutRef<PropsWithChildren<EditLinkProps>>) => (
  <Button onClick={() => cms.toggle()}>{cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}</Button>
);
export default TinaEditLink;
