import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MyComponent from 'src';

configure({ adapter: new Adapter() });


describe('MyComponent', () => {
  it('Renders the title in and h2', () => {
    const title = 'Test Title';
    const myComponent = shallow(<MyComponent title={title} />);
    expect(myComponent.contains(<h2>{title}</h2>)).toBe(true);
  });
});