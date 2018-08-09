import React from 'react'

export default class ColorPicker extends React.Component {
  render = () => {
    const {
      color,
      onChoose,
    } = this.props

    return (
      <div>
        <input
          type="text"
          defaultValue={color}
          ref={(element) => { this._element = element }}
        />
        <button type="button" onClick={() => onChoose(this._element.value)}>
          Choose
        </button>
      </div>
    )
  }
}
