import {useSelector} from "react-redux";
import {useContext} from "react";
import AuthenticationContext from "./auth/AuthenticationContext";

export function useReduxFormError(formName) {
  return useSelector(store =>
    !!(store.form[formName].syncErrors || store.form[formName].submitErrors)
  );
}

export function useAuth() {
  return useContext(AuthenticationContext);
}

export function useCourseStore(selector) {
  return useSelector(store => selector(store.courses));
}

export function useUsersStore(selector) {
  return useSelector(store => selector(store.users));
}