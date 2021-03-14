// Home
import BookMeeting from "./views/BookMeeting";
import Dashboard from "./views/Dashboard";

// List of routes
const routes = [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/book-meeting",
    exact: true,
    name: "Book Meeting",
    component: BookMeeting
  }
];

export default routes;
