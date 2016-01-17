/* globals describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Root from 'containers/Root';


// This is all from http://spencerdixon.com/blog/test-driven-react-tutorial.html

describe('(Container) Root', () => {
  const wrapper = shallow(<Root />);

  it('renders as a div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  // Not sure I want to do CSS via JS.
  // But neat to see you can assert styles this way.
  it('has style with height set to 100%', () => {
    // http://paletton.com/#uid=12U0u0kllllaFw0g0qFqFg0w0aF
    const expectedStyles = {
      height: '100%',
      background: '#2A7F40',
    };

    const actual = wrapper.prop('style');
    expect(actual).to.deep.equal(expectedStyles);
  });

  it('has a welcome message', () => {
    expect(wrapper.find('.welcome-message')).to.have.length(1);
  });
});
