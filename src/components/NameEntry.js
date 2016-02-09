import React, { Component, PropTypes } from 'react';

const propTypes = {
  onMount: PropTypes.func.isRequired,
  name: 'Player 1',
};

class NameEntry extends Component {
  render() {
    return (<div>
      <input type="text" />
      <button>Set name</button>
    </div>);
  }
}

NameEntry.propTypes = propTypes;
export default NameEntry;
