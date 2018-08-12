import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { ConnectedRouter } from 'connected-react-router'
import { createMemoryHistory } from 'history'
import { merge, reduce } from 'lodash'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'

import App from 'components/App'

import createStore from 'createStore'

const render = (url = '/', initialState) => {
  const history = createMemoryHistory({
    initialEntries: [url],
  })
  const store = createStore({ history, initialState })

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  )

  const state = store.getState()
  const helmet = reduce(
    Helmet.renderStatic(),
    (accumulator, element, name) => (
      merge(accumulator, {[name]: element.toString() })
    ),
    {},
  )

  return {
    helmet,
    html,
    state,
  }
}

const url = process.argv[2]
const initialState = !!process.argv[3] && JSON.parse(process.argv[3])

console.log(JSON.stringify(render(url, initialState)))
