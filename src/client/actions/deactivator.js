export const DEACTIVATOR_ACTIVATED = '@deactivator/DEACTIVATOR_ACTIVATED'
export const deactivatorActivated = (id) => ({
  type: DEACTIVATOR_ACTIVATED,
  payload: { id },
})

export const DEACTIVATOR_DEACTIVATED = '@deactivator/DEACTIVATOR_DEACTIVATED'
export const deactivatorDeactivated = (id) => ({
  type: DEACTIVATOR_DEACTIVATED,
  payload: { id },
})
