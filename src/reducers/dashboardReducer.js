import {
  REQUEST_DASHBOARD_COUNT
} from "../constants/ActionTypes";

const initialState = {
  buildings: {
    total: 4
  },
  rooms: {
    total: 20,
    available: 20
  },
  meeting: {
    total: 100,
    onGoing: 0
  }
}
export function dashboardReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case REQUEST_DASHBOARD_COUNT: {
      const dashboardCount = JSON.parse(window.localStorage.getItem("dashboardCount"));
      console.log(dashboardCount && (dashboardCount.buildings, "====>"));
      // if(!dashboardCount) {
        window.localStorage.setItem("dashboardCount", JSON.stringify(dashboardCount || state));
      // }
      state = dashboardCount || state;
      return {...state};
    }
    default:
      return state;
  }
}
