import React from 'react';
import Chips, { Chip } from '../src'

const data = [
  'JavaScript',
  'Ruby',
  'Python',
  'Java',
  'Swift',
  'C++',
  'C',
  'Objective C',
  'Go'
];

const BasicExample = () => (
  <Chips
    placeholder="Type a Programming Language"
    suggestions={data}
    fromSuggestionOnly={true} />
);

export default BasicExample;
