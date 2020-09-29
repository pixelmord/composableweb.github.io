/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '@chakra-ui/core';
import { useCMS } from 'tinacms';

export const TinaEditLink: React.FC = () => {
  const cms = useCMS();
  return <Button onClick={() => cms.toggle()}>{cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}</Button>;
};
export default TinaEditLink;
