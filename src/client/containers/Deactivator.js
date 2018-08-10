import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  deactivatorActivated,
  deactivatorDeactivated,
} from 'actions/deactivator'
import { deactivatorStateSelector } from 'selectors/deactivator'

const select = (state, { id }) => ({
  active: deactivatorStateSelector(state)(id),
})

const actions = (dispatch) => bindActionCreators(
  {
    onActivated: deactivatorActivated,
    onDeactivated: deactivatorDeactivated,
  },
  dispatch,
)

export class Deactivator extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onActivated: PropTypes.func.isRequired,
    onDeactivated: PropTypes.func.isRequired,
  }

  onChange = ({ target: { checked } }) => {
    const {
      id,
      onActivated,
      onDeactivated,
    } = this.props

    if (checked) {
      onActivated(id)
    } else {
      onDeactivated(id)
    }
  }

  render = () => {
    const {
      active,
    } = this.props

    return (
      <input type="checkbox" checked={active} onChange={this.onChange} />
    )
  }
}

export default connect(select, actions)(Deactivator)
