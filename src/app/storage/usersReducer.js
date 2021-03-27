import {actionHandler, CACHED_ROLES, ROLES_LOADING} from "./types";

const init = {
  roles: [],
  rolesLoading: false,
}

const reducerActions = new Map();

reducerActions.set(CACHED_ROLES, (prev, payload) => {
  return {
    ...prev, roles: payload
  }
});

reducerActions.set(ROLES_LOADING, (prev, payload) => {
  return {
    ...prev, rolesLoading: payload
  }
});

export const usersReducer = (state = init, action) =>
  actionHandler(reducerActions, state, action)