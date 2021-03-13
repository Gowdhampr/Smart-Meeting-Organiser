import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Style
import "./App.css";

/** Layouts **/
import DefaultLayout from "./containers/DefaultLayout";

// Views
import Dashboard from "./views/Dashboard";

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
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
