import React from 'react'
import _ from 'lodash'

import { connect } from 'react-redux'
import {
  addPlayer,
  setPlayerJoined,
  startGame,
} from './action_creators'

import NewPlayer from './NewPlayer'

const Pregame = ({ playerJoined, dispatch, enoughPlayers }) => {
  const showNewPlayer = !playerJoined
  const showStartButton = playerJoined && enoughPlayers

  if (showNewPlayer) {
    // TODO bind action creator
    const onSubmit = (playerName) => {
      dispatch(addPlayer(playerName))
      dispatch(setPlayerJoined())
    }
    return <NewPlayer onSubmit={onSubmit} />
  }
  if (showStartButton) {
    const onClick = () => { dispatch(startGame()) }
    return <button onClick={onClick}>Start Game</button>
  }

  return <p>Please wait for another player to join.</p>
}

const mapStateToProps = ({ local, remote }) => {
  console.log("players:", remote.get('players'))
  console.log("players count:", remote.get('players') && remote.get('players').count())

  return {
    playerJoined: local.get('playerJoined'),
    enoughPlayers: remote.get('players') && remote.get('players').count() >= 2
  }
}

export default connect(
  mapStateToProps
)(Pregame)
