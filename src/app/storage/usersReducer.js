import {actionHandler, CACHED_ROLES, LOAD_PROFILE, ROLES_LOADING} from "./types";

const init = {
  roles: [],
  rolesLoading: false,
  profile: {},
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

reducerActions.set(LOAD_PROFILE, (prev, payload) => {
  return {
    ...prev, profile: payload
  }
});

export const usersReducer = (state = init, action) =>
  actionHandler(reducerActions, state, action)