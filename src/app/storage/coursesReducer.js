import {
  actionHandler,
  ENROLLED_COURSES, LOAD_APPROVED_TOPICS,
  LOAD_COURSES,
  LOAD_NOT_APPROVED_TOPICS,
  LOAD_SKIPPED_TOPICS,
  OWNED_COURSES
} from "./types";

const init = {
  owned: {content: []},
  enrolled: {content: []},
  data: null,
  approvingTopics: {content: []},
  approvedTopics: {content: []},
  skippedTopics: {content: []}
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

reducerActions.set(LOAD_NOT_APPROVED_TOPICS, (prev, payload) => {
  return {
    ...prev, approvingTopics: payload
  }
});

reducerActions.set(LOAD_APPROVED_TOPICS, (prev, payload) => {
  return {
    ...prev, approvedTopics: payload
  }
});

reducerActions.set(LOAD_SKIPPED_TOPICS, (prev, payload) => {
  return {
    ...prev, skippedTopics: payload
  }
})

export const coursesReducer = (state = init, action) =>
  actionHandler(reducerActions, state, action);
