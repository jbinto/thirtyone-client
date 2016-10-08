import { Map } from 'immutable'

export default (state = Map(), action) => {
  switch (action.type) {
    case 'PLAYER_JOINED':
      return state.set('playerJoined', true)
    default:
      return state
  }
}
