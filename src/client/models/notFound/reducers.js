import { combineReducers } from 'redux'

import { SET_404, UNSET_404 } from 'models/notFound/actions'

const initialIs404 = false
const is404 = (state=initialIs404, { type }) => {
  switch (type) {
    case SET_404:
      return true
    case UNSET_404:
      return false
    default:
      return state
  }
}

export default combineReducers({
  is404,
})
