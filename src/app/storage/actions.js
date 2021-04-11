import {
  CACHE_PERMISSIONS,
  CACHED_ROLES,
  ENROLLED_COURSES, LOAD_APPROVED_TOPICS,
  LOAD_COURSES, LOAD_NOT_APPROVED_TOPICS,
  LOAD_PROFILE, LOAD_SKIPPED_TOPICS,
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

/* app */

export function roleChangingLoader(changing) {
  return action(ROLE_CHANGING, changing);
}

/* users */

export function rolesLoading(loading) {
  return action(ROLES_LOADING, loading);
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

export function loadProfile(user) {
  return action(LOAD_PROFILE, user);
}

/* courses */

export function loadCourses(data) {
  return action(LOAD_COURSES, data);
}

export function loadOwnedCourses(data) {
  return action(OWNED_COURSES, data);
}

export function loadEnrolledCourses(data) {
  return action(ENROLLED_COURSES, data);
}

export function loadNotApprovedTopics(data) {
  return action(LOAD_NOT_APPROVED_TOPICS, data);
}

export function loadApprovedTopics(data) {
  return action(LOAD_APPROVED_TOPICS, data);
}

export function loadSkippedTopics(data) {
  return action(LOAD_SKIPPED_TOPICS, data);
}