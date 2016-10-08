import React from 'react'
// import _ from 'lodash'

import { connect } from 'react-redux'
import {
  startNewHand
} from './action_creators'

// import NewPlayer from './NewPlayer'

const Hand = ({ piles }) => {
  return <p>{JSON.stringify(piles)}</p>
}

const mapStateToProps = ({ remote }) => {
  return {
    piles: remote.get('piles')
  }
}

export default connect(mapStateToProps)(Hand)
