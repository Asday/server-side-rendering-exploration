export const DEACTIVATOR_ACTIVATED = '@deactivator/DEACTIVATOR_ACTIVATED'
export const deactivatorActivated = (id) => (dispatch) => {
  dispatch({
    type: DEACTIVATOR_ACTIVATED,
    payload: { id },
  })

  setTimeout(
    () => {
      dispatch(deactivatorDeactivated(id))
    },
    5000,
  )
}

export const DEACTIVATOR_DEACTIVATED = '@deactivator/DEACTIVATOR_DEACTIVATED'
export const deactivatorDeactivated = (id) => ({
  type: DEACTIVATOR_DEACTIVATED,
  payload: { id },
})

export const DEACTIVATOR_REGISTERED = '@deactivator/DEACTIVATOR_REGISTERED'
export const registerDeactivator = (id) => ({
  type: DEACTIVATOR_REGISTERED,
  payload: { id },
})
