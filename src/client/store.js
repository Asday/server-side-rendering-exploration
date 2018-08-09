import { combineReducers, createStore } from 'redux'

import theme from 'reducers/theme'

const rootReducer = combineReducers({
  theme,
})

const store = createStore(rootReducer)

export default store
