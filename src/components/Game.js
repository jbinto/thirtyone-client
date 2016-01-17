import React, { Component, PropTypes } from 'react';
import NameEntry from 'components/NameEntry';

class Game extends Component {
  render() {
    const spinner = <p className="spinner">spinner</p>;
    switch (this.props.gameState) {
      case undefined:
        return spinner;
      case 'WAITING_FOR_PLAYERS_OR_START_GAME':
        return <NameEntry />;
      default:
        return <p>FATAL: Unknown gameState ${this.props.gameState}</p>;
    }
  }
}

Game.propTypes = {
  gameState: PropTypes.string,
};

export default Game;
