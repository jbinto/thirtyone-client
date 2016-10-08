import React from 'react'
import _ from 'lodash'

import { connect } from 'react-redux'
import { addPlayer, playerJoined } from './action_creators'
// import './Game.css'

import NewPlayer from './NewPlayer'


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

const Game = ({ gameState, showNewPlayer, players, dispatch }) => {
  const componentForGameState = (gameState) => {
    switch (gameState) {
      case 'WAITING_FOR_NEW_PLAYERS_OR_START_GAME':
        if (showNewPlayer) {
          // TODO extract action creator etc.)
          const onSubmit = (playerName) => {
            dispatch(addPlayer(playerName))
            dispatch(playerJoined())
          }
          return <NewPlayer onSubmit={onSubmit} />
        }
        return <p>Welcome!</p>
      default:
        return <p>FATAL: Unknown game state {gameState}!</p>
    }

  }


  return (
    <div>
      <p>Game state: {gameState}</p>
      <Players players={players} />
      {componentForGameState(gameState)}
    </div>
  )
}

const mapStateToProps = ({ local, remote }) => {
  return {
    gameState: remote.get('gameState'),
    players: remote.get('players'),
    showNewPlayer: !local.get('playerJoined'),
  }
}

export default connect(
  mapStateToProps
)(Game)
