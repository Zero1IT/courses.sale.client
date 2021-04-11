import {
  CACHE_PERMISSIONS,
  CACHED_ROLES,
  ENROLLED_COURSES,
  LOAD_COURSES,
  LOAD_PROFILE,
  LOGOUT,
  OWNED_COURSES,
  PERMISSIONS_LOADING,
  ROLE_CHANGING,
  ROLES_LOADING
} from "./types";

function action(type, payload = null) {
  return {type, payload};
}

export function storeLogout() {
  return action(LOGOUT);
}

/**
 * Role loading process
 * @param loading {Boolean}
 * @return {{payload: *, type: string}}
 */
export function rolesLoading(loading) {
  return action(ROLES_LOADING, loading);
}

export function roleChangingLoader(changing) {
  return action(ROLE_CHANGING, changing);
}

export function saveRoles(roles) {
  return action(CACHED_ROLES, roles);
}

export function permissionsLoading(value) {
  return action(PERMISSIONS_LOADING, value);
}

export function savePermissions(permissions) {
  return action(CACHE_PERMISSIONS, permissions);
}

export function loadCourses(data) {
  return action(LOAD_COURSES, data);
}

export function loadOwnedCourses(data) {
  return action(OWNED_COURSES, data);
}

export function loadEnrolledCourses(data) {
  return action(ENROLLED_COURSES, data);
}

export function loadProfile(user) {
  return action(LOAD_PROFILE, user);
}