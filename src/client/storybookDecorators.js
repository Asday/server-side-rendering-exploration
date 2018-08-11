import React from 'react'

import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'

import createStore from 'createStore'

export const withStore = (story) => (
  <Provider store={createStore(createMemoryHistory())}>
    {story()}
  </Provider>
)
