import React from 'react'

import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

import HeaderNav from 'components/HeaderNav'

storiesOf('HeaderNav', module)
  .addDecorator(StoryRouter())
  .add('default', () => <HeaderNav />)
