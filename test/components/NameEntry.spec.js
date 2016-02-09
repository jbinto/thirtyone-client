/* globals describe, it, expect, sinon */

import React from 'react';
import NameEntry from 'components/NameEntry';

import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

describe('<NameEntry />', () => {
  it('renders a textbox', () => {
    const wrapper = shallow(<NameEntry />);
    expect(wrapper).to.have.descendants('input[type="text"]');
  });

  it('renders a button', () => {
    const wrapper = shallow(<NameEntry />);
    expect(wrapper).to.have.descendants('button');
  });

  it('calls back when the button is clicked', () => {
    let name;
    const handleSetName = (n) => { name = n.value; };
    const wrapper = mount(<NameEntry onSetName={handleSetName} />);

    const input = wrapper.find('input').get(0);
    input.value = 'Jesse';
    wrapper.find('button').simulate('click');

    expect(name).to.equal('Jesse');
  });
});
