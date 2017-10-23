import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Chip from 'src/Chip';

configure({ adapter: new Adapter() });

describe('Chip', () => {
  it('Renders the value', () => {
    const chip = shallow(<Chip value="Test" onRequestRemove={() => {}} />);
    expect(chip.childAt(0).text()).toEqual('Test');
  });
  it('Calls onRequestRemove when the X is clicked', () => {
    const onRequestRemove = jest.fn();
    const chip = shallow(<Chip value="Test" onRequestRemove={onRequestRemove} />);
    chip.childAt(1).simulate('click');
    expect(onRequestRemove).toHaveBeenCalledTimes(1);
  });
  it('Changes backgroundColor when selected', () => {
    const chip = shallow(<Chip value="Test" onRequestRemove={() => {}} selected />);
    expect(chip.getNode().props().style.backgroundColor).toEqual('#ccc');
  });
});