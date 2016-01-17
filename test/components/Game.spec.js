/* globals describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Game from 'components/Game';
import NameEntry from 'components/NameEntry';

// This is all from http://spencerdixon.com/blog/test-driven-react-tutorial.html

describe('<Game />', () => {
  it('renders as a spinner', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find('.spinner')).to.have.length(1);
  });

  describe('state="WAITING_FOR_PLAYERS_OR_START_GAME"', () => {
    it('renders <NameEntry> if player is not set', () => {
      const wrapper = shallow(<Game gameState="WAITING_FOR_PLAYERS_OR_START_GAME" />);
      expect(wrapper.find(NameEntry)).to.have.length(1);
    });
  });

});
