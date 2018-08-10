import { combineReducers, createStore } from 'redux'

import theme from 'reducers/theme'

const rootReducer = combineReducers({
  theme,
})

export default createStore(
  rootReducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
