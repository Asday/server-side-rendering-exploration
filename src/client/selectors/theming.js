import { get } from 'lodash/fp'
import { createSelector } from 'reselect'

export const themeSelector = (state) => state.theme

export const mainColorSelector = createSelector(
  themeSelector,
  get('mainColor'),
)
