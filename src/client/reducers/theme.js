import { combineReducers } from 'redux'

import { SET_MAIN_COLOR } from 'actions/theming'

const initialMainColor = '#000000'
const mainColor = (state=initialMainColor, { type, payload }) => {
  switch (type) {
    case SET_MAIN_COLOR:
      return payload.color
    default:
      return state
  }
}

const theme = combineReducers({
  mainColor,
})

export default theme
