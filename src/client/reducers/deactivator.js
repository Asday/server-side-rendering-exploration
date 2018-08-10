import { defaults, map } from 'lodash'

import {
  DEACTIVATOR_ACTIVATED,
  DEACTIVATOR_DEACTIVATED,
} from 'actions/deactivator'

const operateOn = (array, locator, operator) => map(
  array,
  (item) => locator(item) ? operator(item) : item
)

const initialDeactivators = [{ id: 'homeDeactivator', value: false }]
export default (state=initialDeactivators, { type, payload }) => {
  switch (type) {
    case DEACTIVATOR_ACTIVATED:
      return operateOn(
        state,
        ({ id }) => id === payload.id,
        (item) => defaults({ value: true }, item),
      )

    case DEACTIVATOR_DEACTIVATED:
      return operateOn(
        state,
        ({ id }) => id === payload.id,
        (item) => defaults({ value: false }, item),
      )

    default:
      return state
  }
}
