import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {usersReducer} from "./usersReducer";
import {coursesReducer} from "./coursesReducer";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer,
  courses: coursesReducer,
  form: formReducer
});

export default rootReducer;