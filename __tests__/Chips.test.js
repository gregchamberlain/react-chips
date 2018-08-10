import React from 'react';
import { shallow } from 'enzyme';

import Chips from '../src/Chips';

const minProps = {
  value: [],
  onChange: () => {}
};

const withChipTheme = {
  ...minProps,
  chipTheme: { chip: { padding: 100 } }
}

test('Renders without exploding', () => {

  const chips = shallow(
    <Chips {...minProps} />
  );

  expect(chips);
  
}); 

test('Renders with chipTheme without exploiding', () => {
  
  const chips = shallow(
    <Chips {...withChipTheme} />
  );

  expect(chips);

});