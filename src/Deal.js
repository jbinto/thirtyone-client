import React from 'react'
// import _ from 'lodash'

import { connect } from 'react-redux'
import {
  startNewHand
} from './action_creators'

// import NewPlayer from './NewPlayer'

const Deal = ({ dispatch }) => {
  const onClick = () => { dispatch(startNewHand() )}
  return <button onClick={onClick}>Deal New Hand</button>
}

export default connect()(Deal)
