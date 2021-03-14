import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Style
import "./App.scss";

/** Layouts **/
import DefaultLayout from "./containers/DefaultLayout";

// Views
import Dashboard from "./views/Dashboard";
import BookMeeting from "./views/BookMeeting";

/*
   App Content
*/
function App() {
  return (
    <div>
      <div className="routeSection">
        <Router>
          <Switch>
            <DefaultLayout
              exact
              name="Dashboard"
              path="/"
              component={Dashboard}
            />
            <DefaultLayout
              exact
              name="Book Meeting"
              path="/book-meeting"
              component={BookMeeting}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
