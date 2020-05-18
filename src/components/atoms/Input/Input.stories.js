import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const Normal = () => <Input placeholder="loginek" />;
export const Search = () => <Input search placeholder="search 😎" />;
