export const setGameState = (gameState) => ({
  type: 'SET_GAME_STATE',
  state: gameState,
})

export const setPlayerJoined = () => ({ type: 'PLAYER_JOINED' })

// Remote actions, via remote_action_middleware
const remote = (action) => ({ ...action, meta: { remote: true } })
export const addPlayer = (player) => remote({
  type: 'ADD_PLAYER',
  player,
})

export const startGame = () => remote({ type: 'START_GAME' })
