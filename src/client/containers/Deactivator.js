import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  deactivatorActivated,
  deactivatorDeactivated,
  registerDeactivator,
} from 'models/deactivators/actions'
import { deactivatorStateSelector } from 'models/deactivators/selectors'

const select = (state, { id }) => ({
  active: deactivatorStateSelector(state)(id),
})

const actions = (dispatch) => bindActionCreators(
  {
    onActivated: deactivatorActivated,
    onDeactivated: deactivatorDeactivated,
    register: registerDeactivator,
  },
  dispatch,
)

export class Deactivator extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onActivated: PropTypes.func.isRequired,
    onDeactivated: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
  }

  static defaultProps = {
    active: false,
  }

  constructor(props) {
    const {
      id,
      register,
    } = props

    super(props)

    register(id)
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
