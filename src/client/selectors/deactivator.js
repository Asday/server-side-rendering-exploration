import { find, get } from 'lodash/fp'
import { createSelector } from 'reselect'

export const deactivatorsSelector = (state) => state.deactivators

export const deactivatorStateSelector = createSelector(
  deactivatorsSelector,
  (deactivators) => (id) => get('value')(find({ id })(deactivators)),
)
