import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Chips from './Chips';

const suggestions = [
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

storiesOf('Chips', module)
  .add('basic', () => (
    <Chips
      createChipKeys={[13]}
      placeholder="Type a Programming Language"
      suggestions={suggestions}
      fromSuggestionsOnly={false}
    />
  ));
