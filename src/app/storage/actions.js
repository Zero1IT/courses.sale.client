import RoleService from "../../js/services/RoleService";
import {CACHED_ROLES, ENROLLED_COURSES, LOAD_COURSES, OWNED_COURSES, ROLE_CHANGING, ROLES_LOADING} from "./types";
import CourseService from "../../js/services/CourseService";

/**
 * Role loading process
 * @param loading {Boolean}
 * @return {{payload: *, type: string}}
 */
export function rolesLoading(loading) {
  return {
    type: ROLES_LOADING,
    payload: loading
  }
}

export function roleChangingLoader(changing) {
  return {
    type: ROLE_CHANGING,
    payload: changing
  }
}

export function saveRoles(roles) {
  return {
    type: CACHED_ROLES,
    payload: roles
  }
}

export function fetchRoles() {
  return async (dispatch, getState) => {
    const {users} = getState();
    if (!users.roles || !users.roles.length || users.roles.length === 0) {
      const result = await RoleService.loadRoles();
      dispatch(saveRoles(result));
    }
  }
}

export function loadCourses(data) {
  return {
    type: LOAD_COURSES,
    payload: data
  }
}

export function fetchCourses(page) {
  return async dispatch => {
    const data = await CourseService.loadCourses(page);
    dispatch(loadCourses(data));
  };
}

export function loadOwnedCourses(data) {
  return {
    type: OWNED_COURSES,
    payload: data
  }
}

export function fetchOwnedCourses(page = 1) {
  return async dispatch => {
    const data = await CourseService.ownedCourses(page);
    dispatch(loadOwnedCourses(data));
  }
}

export function loadEnrolledCourses(data) {
  return {
    type: ENROLLED_COURSES,
    payload: data
  }
}

export function fetchEnrolledCourses(page = 1) {
  return async dispatch => {
    const data = await CourseService.enrolledCourses(page);
    dispatch(loadEnrolledCourses(data));
  }
}
