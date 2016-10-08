import React from 'react'
import { connect } from 'react-redux'

class GameAbandoned extends React.Component {
  render() {
    return <div className="gameAbandoned">
      Game over! (abandoned by {this.props.player}).
      Resetting in 5s.
    </div>
  }
}

const mapStateToProps = ({ remote }) => {
  return {
    player: remote.get('abandonedBy')
  }
}

export default connect(
  mapStateToProps
)(GameAbandoned)
