import React from 'react'

import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ColorPicker from 'components/ColorPicker'
import Title from 'components/Title'
import Deactivator from 'containers/Deactivator'
import { setMainColor } from 'models/theming/actions'
import { mainColorSelector } from 'models/theming/selectors'

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
        <Helmet>
          <title>Home</title>
        </Helmet>

        <Title fontColor={color} />
        <ColorPicker color={color} onChoose={onChooseColor} />
        <Deactivator id='homeDeactivator' />
      </div>
    )
  }
}

export default connect(select, actions)(Home)
