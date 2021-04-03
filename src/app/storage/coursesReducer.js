import {actionHandler, ENROLLED_COURSES, LOAD_COURSES, OWNED_COURSES} from "./types";

const init = {
  owned: {content: []},
  enrolled: {content: []}
};

const reducerActions = new Map();

reducerActions.set(LOAD_COURSES, (prev, payload) => {
  return {
    ...prev, data: payload
  }
});

reducerActions.set(OWNED_COURSES, (prev, payload) => {
  return {
    ...prev, owned: payload
  }
});

reducerActions.set(ENROLLED_COURSES, (prev, payload) => {
  return {
    ...prev, enrolled: payload
  }
});

export const coursesReducer = (state = init, action) =>
  actionHandler(reducerActions, state, action);
