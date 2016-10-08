import React from 'react'
import { connect } from 'react-redux'
// import './Game.css'

const Game = (props) => {
  return <p>Game state: {props.theFancyGameState}</p>
}

const mapStateToProps = (state) => ({
  theFancyGameState: state.get('gameState')
})

export default connect(
  mapStateToProps
)(Game)
