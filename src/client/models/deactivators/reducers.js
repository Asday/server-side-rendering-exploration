import { concat, defaults, find, map } from 'lodash'

import {
  DEACTIVATOR_ACTIVATED,
  DEACTIVATOR_DEACTIVATED,
  DEACTIVATOR_REGISTERED,
} from 'models/deactivators/actions'

const operateOn = (array, locator, operator) => map(
  array,
  (item) => locator(item) ? operator(item) : item
)

const initialDeactivators = []
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

    case DEACTIVATOR_REGISTERED:
      return !!find(state, (item) => item.id === payload.id)
        ? state
        : concat(state, { id: payload.id, value: false })

    default:
      return state
  }
}
