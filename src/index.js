import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import io from 'socket.io-client'

import './index.css'
import App from './App'
import {
  setGameState
} from './action_creators'
import remoteActionMiddleware from './remote_action_middleware'
import remoteReducer from './remote_reducer'
import localReducer from './local_reducer'

const socket = io.connect('http://localhost:8090')

const reducers = combineReducers({
  remote: remoteReducer,
  local: localReducer,
})

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore)

const store = createStoreWithMiddleware(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

socket.on('state', state => {
  console.log('SOCKET state', state)
  store.dispatch(setGameState(state))
})

socket.on('hello', message => console.log(message))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
