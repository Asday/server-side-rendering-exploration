import { combineReducers, createStore } from 'redux'

import deactivators from 'reducers/deactivator'
import theme from 'reducers/theme'

const rootReducer = combineReducers({
  deactivators,
  theme,
})

export default createStore(
  rootReducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
