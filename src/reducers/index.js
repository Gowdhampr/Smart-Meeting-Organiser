import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// Dashboard
import { dashboardReducer } from "./dashboardReducer";
// Book Meeting
import { bookMeetingReducer } from "./bookMeetingReducer";

const appReducer = combineReducers({
  routing: routerReducer,
  dashboard: dashboardReducer,
  bookMeeting: bookMeetingReducer
});

const rootReducer = (state, action) => {
  if (action.type === "UNAUTH_USER") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
