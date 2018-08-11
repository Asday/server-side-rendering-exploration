import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { ConnectedRouter } from 'connected-react-router'
import { createMemoryHistory } from 'history'
import { map } from 'lodash'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'

import App from 'components/App'

import createStore from 'createStore'

const history = createMemoryHistory()
const store = createStore({ history })

const render = () => {
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  )

  const state = store.getState()
  const head = map(
    Helmet.renderStatic(),
    (element, key) => ({ [key]: element.toString() }),
  )

  return {
    head,
    html,
    state,
  }
}

console.log(JSON.stringify(render()))
