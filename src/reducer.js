import { Map } from 'immutable'

const setState = (state, newState) => {
  return state.merge(newState)
}

export default (state = Map(), action) => {
  console.log(`reducer action=${JSON.stringify(action)} state=${state}`)

  switch (action.type) {
    case 'SET_GAME_STATE':
      return setState(state, action.state)
    default:
      return state
  }
}
