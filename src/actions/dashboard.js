import {
    REQUEST_DASHBOARD_COUNT,
} from "../constants/ActionTypes";

/**
 * Request for dashboard count
 */
export function fetchDashboardDetails() {
  return {
    type: REQUEST_DASHBOARD_COUNT
  };
}
