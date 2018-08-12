import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { merge, reduce } from 'lodash'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import App from 'components/App'

import createStore from 'createStore'

const render = (url = '/', initialState) => {
  const store = createStore({ initialState })
  const context = {}

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
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
    context,
  }
}

const url = process.argv[2]
const initialState = !!process.argv[3] ? JSON.parse(process.argv[3]) : {}

console.log(JSON.stringify(render(url, initialState)))
