import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Chips from 'src/Chips';
import Chip from 'src/Chip';

configure({ adapter: new Adapter() });

describe('Chips', () => {
  const onRequestRemove = jest.fn();
  const onRequestRemoveChip = jest.fn(() => onRequestRemove);
  const chips = shallow(<Chips value={['chip 1', 'chip 2']} onRequestRemoveChip={onRequestRemoveChip} />);
  it('Renders chips', () => {
    expect(chips.find(Chip)).toHaveLength(2);
  });
  it ('Call onRequestRemoveChip with the correct index', () => {
    chips.find(Chip).at(0).props().onRequestRemove();
    chips.find(Chip).at(1).props().onRequestRemove();
    expect(onRequestRemoveChip).toHaveBeenCalledTimes(2);
    expect(onRequestRemoveChip.mock.calls[0][0]).toBe(0);
    expect(onRequestRemoveChip.mock.calls[1][0]).toBe(1);
  });
});