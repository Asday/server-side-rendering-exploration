import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import deactivators from 'reducers/deactivator'
import theme from 'reducers/theme'

const composeEnhancers = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const rootReducer = combineReducers({
  deactivators,
  theme,
})

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
)
