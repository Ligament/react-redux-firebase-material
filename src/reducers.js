import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
// import { reducer as formReducer } from "redux-form";
// import authReducer from "./authReducer";
// import userReducer from "./userReducer";
const rootReducer = combineReducers({
  // form: formReducer,
  // user: userReducer,
  // auth: authReducer,
  firebase: firebaseReducer
});
export default rootReducer;
