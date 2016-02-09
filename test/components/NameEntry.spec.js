/* globals describe, it, expect, sinon */
/* eslint-disable no-unused-expressions */

import React from 'react';
import NameEntry from 'components/NameEntry';

import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

describe('<NameEntry />', () => {

  it('renders a textbox and a button', () => {
    const wrapper = shallow(<NameEntry />);
    expect(wrapper).to.have.descendants('input[type="text"]');
    expect(wrapper).to.have.descendants('button');
  });

  it('calls back when the button is clicked', () => {
    const handleSetName = sinon.spy();
    // Can't use shallow if we want to mutate input.value
    const wrapper = mount(<NameEntry onSetName={handleSetName} />);

    const input = wrapper.find('input').get(0);
    input.value = 'Jesse';

    wrapper.find('button').simulate('click');
    expect(handleSetName.calledWithExactly('Jesse')).to.be.true;
  });
});
