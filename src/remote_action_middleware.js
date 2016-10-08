// https://github.com/jbinto/redux-voting-client/blob/master/src/remote_action_middleware.js

export default socket => store => next => action => {
  console.log('in middleware', action)
  if (action.meta && action.meta.remote) {
    socket.emit('action', action)
  }
  return next(action)
}
