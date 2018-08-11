import { connectRouter, routerMiddleware } from 'connected-react-router'
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

export default ({ history, extraMiddleware = [] }) => createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    thunk,
    ...extraMiddleware,
  )),
)
