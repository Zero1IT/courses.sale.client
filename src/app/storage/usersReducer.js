import {
  actionHandler,
  CACHE_PERMISSIONS,
  CACHED_ROLES,
  LOAD_PROFILE,
  PERMISSIONS_LOADING,
  ROLES_LOADING
} from "./types";

const init = {
  roles: [], // all app roles
  rolesLoading: false, // roles loading indicator
  permissions: [], // all app perms
  permissionsLoading: false,
  profile: {}, // current user
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

reducerActions.set(CACHE_PERMISSIONS, (prev, payload) => {
  return {
    ...prev, permissions: payload ? payload.map(it => it.name) : []
  }
});

reducerActions.set(PERMISSIONS_LOADING, (prev, payload) => {
  return {
    ...prev, permissionsLoading: payload
  }
});

export const usersReducer = (state = init, action) =>
  actionHandler(reducerActions, state, action)