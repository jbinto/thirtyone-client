import { Map, fromJS } from 'immutable'

// const setState = (state, newState) => {
//   return state.merge(newState)
// }

export default (state = Map(), action) => {
  switch (action.type) {
    case 'SET_GAME_STATE':
      return fromJS(action.state)
    default:
      return state
  }
}
