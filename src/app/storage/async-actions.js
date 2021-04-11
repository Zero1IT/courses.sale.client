import RoleService from "../../js/services/RoleService";
import CourseService from "../../js/services/CourseService";
import UserService from "../../js/services/UserService";
import {
  loadCourses,
  loadEnrolledCourses,
  loadOwnedCourses, loadProfile,
  permissionsLoading,
  rolesLoading,
  savePermissions,
  saveRoles
} from "./actions";

export function fetchRoles() {
  return async (dispatch, getState) => {
    const {users} = getState();
    if (!users.roles || !users.roles.length || users.roles.length === 0) {
      rolesLoading(true);
      const result = await RoleService.loadRoles();
      dispatch(saveRoles(result));
      rolesLoading(false);
    }
  }
}

export function fetchPermissions() {
  return async (dispatch, getState) => {
    const {users} = getState();
    if (!users.permissions || !users.permissions.length || users.permissions.length === 0) {
      permissionsLoading(true);
      const result = await RoleService.loadPermissions();
      dispatch(savePermissions(result));
      permissionsLoading(false);
    }
  }
}

export function fetchCourses(page) {
  return async dispatch => {
    const data = await CourseService.loadCourses(page);
    dispatch(loadCourses(data));
  };
}

export function fetchOwnedCourses(page = 1) {
  return async dispatch => {
    const data = await CourseService.ownedCourses(page);
    dispatch(loadOwnedCourses(data));
  }
}

export function fetchEnrolledCourses(page = 1) {
  return async dispatch => {
    const data = await CourseService.enrolledCourses(page);
    dispatch(loadEnrolledCourses(data));
  }
}

export function fetchProfile() {
  return async dispatch => {
    const profile = await UserService.loadCurrentProfile();
    dispatch(loadProfile(profile));
  };
}