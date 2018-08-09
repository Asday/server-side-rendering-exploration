import React from 'react'

export default class Title extends React.Component {
  render = () => {
    const {
      fontColor,
    } = this.props

    return <h1 style={{ color: fontColor }}>Title</h1>
  }
}
