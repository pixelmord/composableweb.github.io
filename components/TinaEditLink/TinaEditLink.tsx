/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button, ButtonProps } from '@chakra-ui/core';
import { useCMS } from 'tinacms';

export const TinaEditLink: React.FC<Omit<ButtonProps, 'children'>> = (props) => {
  const cms = useCMS();
  return (
    <Button leftIcon="edit" onClick={() => cms.toggle()} {...props}>
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </Button>
  );
};
export default TinaEditLink;
