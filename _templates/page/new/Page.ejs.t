---
to: "<%= h.src() %>/pages/<%= name %>.tsx"
---
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { NextPage } from 'next';
import PageLayout from '../components/PageLayout';

const <%= name %>: NextPage = () => <PageLayout></PageLayout>;
export default <%= name %>;