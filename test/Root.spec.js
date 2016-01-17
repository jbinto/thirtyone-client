/* globals describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Root from '../src/containers/Root.jsx';

describe('(Container) Root', () => {
  it('renders as a div', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.type()).to.equal('div');
  });
});
