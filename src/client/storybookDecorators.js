import React from 'react'

import { action } from '@storybook/addon-actions'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'

import createStore from 'createStore'

const actionMiddleware = () => {
  return (next) => (reduxAction) => {
    action()(reduxAction)

    return next(reduxAction)
  }
}

const storeOptions = {
  history: createMemoryHistory(),
  extraMiddleware: [actionMiddleware],
}

export const withStore = (story) => {
  return (
    <Provider store={createStore(storeOptions)}>
      {story()}
    </Provider>
  )
}
