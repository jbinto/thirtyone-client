import React, { Component } from 'react';
import { render } from 'react-dom';

class Root extends Component {
  render() {
    return <h1> Hello World </h1>;
  }
}

render(<Root />, document.getElementById('root'));
