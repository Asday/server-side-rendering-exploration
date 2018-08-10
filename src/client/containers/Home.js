import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setMainColor } from 'actions/theming'
import ColorPicker from 'components/ColorPicker'
import Title from 'components/Title'
import Deactivator from 'containers/Deactivator'
import { mainColorSelector } from 'selectors/theming'

const select = (state) => ({
  color: mainColorSelector(state),
})

const actions = (dispatch) => bindActionCreators(
  {
    onChooseColor: setMainColor,
  },
  dispatch,
)

export class Home extends React.Component {
  render = () => {
    const {
      color,
      onChooseColor,
    } = this.props

    return (
      <div>
        <Title fontColor={color} />
        <ColorPicker color={color} onChoose={onChooseColor} />
        <Deactivator id='homeDeactivator' />
      </div>
    )
  }
}

export default connect(select, actions)(Home)
