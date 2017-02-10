import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Chips from './Chips';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

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
    placeholder="Type a Programming Language"
    suggestions={suggestions}
    fromSuggestionsOnly={false}
    />
  ));
