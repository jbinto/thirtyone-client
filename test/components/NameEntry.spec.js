/* globals describe, it, expect, sinon */
/* eslint-disable no-unused-expressions */

import React from 'react';
import NameEntry from 'components/NameEntry';
import sinon from 'sinon';

import {
  describeWithDOM, // https://github.com/airbnb/enzyme/blob/9d5d3de1c2492f89862c5d3d79f21174ff8e775f/src/index.js#L22
  mount,  // as opposed to 'shallow'
  spyLifecycle,  // toggle `sinon` spy on React lifecycle hooks
} from 'enzyme';


describeWithDOM('lifecycle methods', () => {
  // but why wouldn't it...???
  it('calls componentDidMount', () => {
    spyLifecycle(NameEntry);

    const props = {
      onMount: () => {}, // noop
      name: 'Player 1',
    };

    mount(<NameEntry {...props} />);

    // Enzyme's `spyLifecycle` shoves spy results onto the component's prototype.
    // `calledOnce` is Sinon syntax.

    // componentDidMount() has to actually be defined on the React component
    // for this to work.
    expect(
      NameEntry.prototype.componentDidMount.calledOnce
    ).to.be.true;
  });

  it('calls onMount prop once it mounts', () => {
    const props = { onMount: sinon.spy() };
    mount(<NameEntry {...props} />);
    expect(props.onMount.calledOnce).to.be.true;
  });
});
