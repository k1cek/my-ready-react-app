import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Heading',
};

export const Normal = () => <Heading>Hello Roman (normal heading)</Heading>;

export const Big = () => <Heading big>Hello Roman (big heading)</Heading>;
