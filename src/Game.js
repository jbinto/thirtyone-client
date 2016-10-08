import React from 'react'
import _ from 'lodash'

import { connect } from 'react-redux'

import Pregame from './Pregame'
import GameAbandoned from './GameAbandoned'

const Players = ({ players = [] }) => {
  return (
    <div className="players">
      <h2>Players:</h2>
      <ul>
        {players.map(p => <li key={p}>{p}</li>)}
      </ul>
    </div>
  )
}

const Game = ({ gameState, players, dispatch }) => {
  const componentForGameState = (gameState) => {
    switch (gameState) {
      case 'WAITING_FOR_NEW_PLAYERS_OR_START_GAME':
        return <Pregame />
      case 'GAME_ABANDONED':
        return <GameAbandoned />
      default:
        return <p>FATAL: Unknown game state {gameState}!</p>
    }
  }

  return (
    <div className="game">
      <p className="debug">Game state: {gameState}</p>
      <Players players={players} />
      {componentForGameState(gameState)}
    </div>
  )
}

const mapStateToProps = ({ local, remote }) => {
  return {
    gameState: remote.get('gameState'),
    players: remote.get('players'),
  }
}

export default connect(
  mapStateToProps
)(Game)
