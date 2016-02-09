/* globals describe, it, expect, sinon */

import React from 'react';
import NameEntry from 'components/NameEntry';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('<NameEntry />', () => {
  it('renders a textbox', () => {
    const wrapper = shallow(<NameEntry />);
    expect(wrapper).to.have.descendants('input[type="text"]');
  });

  it('renders a button', () => {
    const wrapper = shallow(<NameEntry />);
    expect(wrapper).to.have.descendants('button');
  });
});
