import {actionHandler, ROLE_CHANGING} from "./types";

const init = {
  changingRole: false,
};

const reducerActions = new Map();

reducerActions.set(ROLE_CHANGING, (prev, payload) => {
  return {
    ...prev, changingRole: payload
  }
});

export const appReducer = (state = init, action) =>
  actionHandler(reducerActions, state, action);