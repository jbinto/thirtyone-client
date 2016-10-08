import React from 'react'
import { connect } from 'react-redux'

import { addPlayer } from './action_creators'
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


const Game = ({ gameState, players, dispatch }) => {
  const componentForGameState = (gameState) => {
    switch (gameState) {
      case 'WAITING_FOR_NEW_PLAYERS_OR_START_GAME':
        const onSubmit = (playerName) => {
          // TODO extract action creator etc.
          dispatch(addPlayer(playerName))
        }
        return <NewPlayer onSubmit={onSubmit} />
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

const mapStateToProps = (state) => ({
  gameState: state.get('gameState'),
  players: state.get('players')
})

export default connect(
  mapStateToProps
)(Game)
