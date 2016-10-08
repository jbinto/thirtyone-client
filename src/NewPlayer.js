import React from 'react'

export default class NewPlayer extends React.Component {
  onChange(e) {
    this.setState({ name: e.target.value })
  }

  onClick() {
    const name = this.state.name
    const onSubmit = this.props.onSubmit

    if (name.length > 0) {
      onSubmit(name)
    }
  }

  render() {
    return (
      <div>
        <label>
          <input
            onChange={this.onChange.bind(this)}
            placeholder="enter your name here :)"
          />
          <button type="button" onClick={this.onClick.bind(this)}>
            go
          </button>
        </label>
      </div>
    )
  }
}

NewPlayer.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}
