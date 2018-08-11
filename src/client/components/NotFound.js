import React from 'react'

import { Helmet } from 'react-helmet'

export default class NotFound extends React.Component {
  render = () => (
    <React.Fragment>
      <Helmet>
        <title>404</title>
      </Helmet>

      <h1>404 dude</h1>
    </React.Fragment>
  )
}
