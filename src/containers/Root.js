import React, { Component } from 'react';
import Game from 'components/Game';


export default class Root extends Component {
  render() {
    const style = {
      height: '100%',
      background: '#2A7F40',
    };
    return (
      <div style={style}>
        <h1 className="welcome-message">welcome to 31</h1>
        <Game />
      </div>
    );
  }
}