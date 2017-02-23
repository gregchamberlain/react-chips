import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Starter from '../src/index';

describe('Test Example', function() {
  it('contains spec with an expectation', function() {
    expect(shallow(<Starter />).contains(<h1>React Component Boilerplate</h1>)).to.equal(true);
  });
});