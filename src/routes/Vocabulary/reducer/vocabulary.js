export const actions = {
  
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

}
// ------------------------------------
// Reducer
// ------------------------------------

export default function vocabularyReducer (state = [], action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}