import React, { Component, PropTypes } from 'react';

const propTypes = {
  onSetName: PropTypes.func.isRequired,
};

class NameEntry extends Component {
  constructor(props) {
    super(props);
    this.handleSetName = this.handleSetName.bind(this);
  }

  handleSetName() {
    const name = this.refs.name.value;
    const onSetName = this.props.onSetName;
    onSetName(name);
  }

  render() {
    return (<div>
      <input type="text" ref="name" />
      <button onClick={this.handleSetName}>Set name</button>
    </div>);
  }
}

NameEntry.propTypes = propTypes;
export default NameEntry;
