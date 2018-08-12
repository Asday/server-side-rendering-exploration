import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import deactivators from 'models/deactivators/reducers'
import notFound from 'models/notFound/reducers'
import theme from 'models/theming/reducers'

const composeEnhancers = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const rootReducer = combineReducers({
  deactivators,
  notFound,
  theme,
})

export default ({
  history,
  extraMiddleware = [],
  initialState,
}) => createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    thunk,
    ...extraMiddleware,
  )),
)
