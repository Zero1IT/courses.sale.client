import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {usersReducer} from "./usersReducer";
import {coursesReducer} from "./coursesReducer";
import {reducer as formReducer} from "redux-form";
import {LOGOUT} from "./types";

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer,
  users: usersReducer,
  courses: coursesReducer
});

const rootReducerWrapper = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return rootReducer(state, action);
}

export default rootReducerWrapper;