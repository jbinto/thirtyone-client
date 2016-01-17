import React, { Component, PropTypes } from 'react';

const propTypes = {
  onMount: PropTypes.func.isRequired,
  name: 'Player 1',
};

class NameEntry extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return <p>NameEntry</p>;
  }
}

NameEntry.propTypes = propTypes;
export default NameEntry;
