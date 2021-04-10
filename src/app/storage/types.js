/**
 * Handles any actions
 * @param map {Map} - reducer actions map, where key is action name, value - handler
 *              handler accepts two arguments: previous state and payload, returns new state
 * @param action {{type: String, payload}} - action object
 * @param state {Object} - current state of the calling reducer
 * @return new state returned by handler for the calling reducer
 */
export function actionHandler(map, state, action) {
  const actionFunction = map.get(action.type);
  if (actionFunction) {
    const result = actionFunction(state, action.payload);
    return result ? result : state;
  }
  return state;
}

export const CACHED_ROLES = "cache_roles";
export const ROLES_LOADING = "roles_loading";
export const ROLE_CHANGING = "role_changing";
export const CHANGE_ROLE = "change_role";

export const LOAD_COURSES = "load_courses";
export const OWNED_COURSES = "owned_courses";
export const ENROLLED_COURSES = "enrolled_courses";

export const LOAD_PROFILE = "load_profile";