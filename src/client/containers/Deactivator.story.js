import React from 'react'

import { storiesOf } from '@storybook/react'

import { withStore } from 'storybookDecorators'
import Deactivator from 'containers/Deactivator'

storiesOf('Deactivator', module)
  .addDecorator(withStore)
  .add('default', () => <Deactivator id='storybookDeactivator' />)
