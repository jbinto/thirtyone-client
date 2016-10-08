export const setGameState = (gameState) => ({
  type: 'SET_GAME_STATE',
  state: gameState,
})

export const setPlayerJoined = () => ({ type: 'PLAYER_JOINED' })


// TODO: action creators for join game, draw, knock, etc.



// Remote actions, via remote_action_middleware
const remote = (action) => ({ ...action, meta: { remote: true } })
export const addPlayer = (player) => remote({
  type: 'ADD_PLAYER',
  player,
})
