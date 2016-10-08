import React from 'react'

export default class NewPlayer extends React.Component {
  onChange(e) {
    this.setState({ name: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const name = this.state.name
    const onSubmit = this.props.onSubmit

    if (name.length > 0) {
      onSubmit(name)
    }
  }

  render() {
    return (
      <div className="newPlayer">
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>
            <input
              autoFocus={true}
              onChange={this.onChange.bind(this)}
              placeholder="enter your name here :)"
            />
            <button>go</button>
          </label>
        </form>
      </div>
    )
  }
}

NewPlayer.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}
